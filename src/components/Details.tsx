import React, { Component, useState } from "react";
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { DetailProps } from '../types/PropsType';

class Details extends Component<DetailProps> {
  render() {
    const { openDetails, onCloseModalDetails, details } = this.props;
    return (
      <Modal
        open={openDetails}
        onClose={onCloseModalDetails}
        styles={{
          modal: {
            maxWidth: "unset",
            width: "56%",
            padding: "unset"
          },
          overlay: {
            background: "rgba(0, 0, 0, 0.5)"
          },
          closeButton: {
            background: "yellow"
          }
        }}
        center
      >
       <div style={{padding: '5rem'}}>
           <h2>Movie Summary</h2>
           {details}
       </div>

      </Modal>
    );
  }
}

export default Details;
