import React, { Component, useState } from "react";
import ReactPlayer from "react-player";
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { PlayerProps } from '../types/Player';

class Player extends Component<PlayerProps> {
  render() {
    const { open, toggleModal, url } = this.props;
    return (
      <Modal
        open={open}
        onClose={toggleModal}
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
       <video controls={true} autoPlay={true}>
          <source src={url} type="video/x-m4v" />
       </video>

      </Modal>
    );
  }
}

export default Player;
