import React, { useState, FunctionComponent } from 'react';
import { Card, Button, Container, CardGroup } from 'react-bootstrap';
import useGetMovieService from '../services/Movies';
import Loader from "react-loader-spinner";
import Player from "../components/Player";

const Movies: React.FC<{}> = () => {
  
  const service = useGetMovieService();

  const [open, setOpen] = useState(false);
  const [url, setUrl] = useState('');

  const onOpenModal = async (_url: string) => {
    setOpen(true);
    setUrl(_url);
  }

  const onCloseModal = () => { 
    setOpen(false); 
    console.log(url);
  }
    
  return (
    <div style={{textAlign: 'center'}}>
              <div style={{
                textAlign: 'center',
                flex: 1,
                flexDirection: 'column',
                alignContent: 'center',
                alignItems: 'center',   
                zIndex: 999,
                width: '100%',
                position: 'absolute',
                marginTop: '20rem',     
              }}>
                <Loader
                  type="Puff"
                  color="#00BFFF"
                  height={100}
                  width={100}
                  timeout={2000} //3 secs
                />
              </div>
      {service.status === 'loading' && 
              <div style={{
                textAlign: 'center',
                flex: 1,
                flexDirection: 'column',
                alignContent: 'center',
                alignItems: 'center',   
                zIndex: 999,
                width: '100%',
                position: 'absolute',
                marginTop: '20rem',     
              }}>
                <Loader
                  type="Puff"
                  color="#00BFFF"
                  height={100}
                  width={100}
                  timeout={2000} //3 secs
                />
              </div>
      }
      {service.status === 'loaded' &&
        //console.log(service)
        service.payload.entry.map((movie:any) => (
            <Card key={movie.id.attributes['im:id']} style={{ width: '20%', margin: '2em', display: 'inline-block' }}>
              <Card.Img variant="top" src={movie['im:image'][2]['label']} />
              <Card.Body>
                <Card.Title style={{fontSize:'1em'}}>
                 <b>Title:</b> {movie['im:name']['label']}
                </Card.Title>
                <Card.Text>
                  <div><b>Artist:</b> {movie['im:artist']['label']}</div>
                  <div><b>Price:</b> {movie['im:price']['label']}</div>
                </Card.Text>
                <Button onClick={() => onOpenModal(movie['link'][1]['attributes']['href'])} style={{margin: '1rem'}} variant="primary">Preview</Button>
                <Button style={{margin: '1rem'}} variant="info">Details</Button>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Category: {movie['category']['attributes']['label']}</small>
              </Card.Footer>
            </Card>
        ))
      }
      {service.status === 'error' && (
        <div style={{textAlign: 'center'}}>Error, the backend moved to the dark side.</div>
      )}
      <Player open={open} toggleModal={onCloseModal} url={url} />
    </div>
  );
  
};

export default Movies;
function setState(_arg0: (prevState: { open: any; }) => { open: boolean; }) {
  throw new Error('Function not implemented.');
}

