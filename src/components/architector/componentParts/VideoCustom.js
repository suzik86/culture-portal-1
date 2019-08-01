import React, { Component } from 'react';
import ModalVideo from 'react-modal-video';
import Button from 'react-bootstrap/Button';

class VideoCustom extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
    this.openModal = this.openModal.bind(this);
  }

  openModal() {
    this.setState({ isOpen: true });
  }

  render() {
    const { isOpen } = this.state;
    return (
      <div>
        <ModalVideo channel="youtube" isOpen={isOpen} videoId="L61p2uyiMSo" onClose={() => this.setState({ isOpen: false })} />
        <Button variant="primary" size="lg" block onClick={this.openModal}>Video</Button>
      </div>
    );
  }
}

export default VideoCustom;
