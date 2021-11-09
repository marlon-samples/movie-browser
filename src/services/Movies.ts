import { useEffect, useState } from 'react';
import { Service } from '../types/Service';
import { Movie } from '../types/Movie';

export interface Movies {
  feed: Movie[];
  entry: any;
  author: any;
  rights: any;
}

const useGetMovieService = () => {
  const [feed, setFeeds] = useState<Service<Movies>>({
    status: 'loading'
  });

  useEffect(() => {
    fetch('https://itunes.apple.com/us/rss/topmovies/limit=100/json')
      .then(response => response.json())
      .then(response => setFeeds({ 
        status: 'loaded', 
        payload: response.feed, 
        author: response.feed.author, 
        entry: response.feed.entry, 
        rights: response.feed.rights }))
      .catch(error => setFeeds({ status: 'error', error }));
  }, []);
  console.log(feed);
  return feed;
};

export default useGetMovieService;
