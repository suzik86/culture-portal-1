import React, { Component } from 'react';
import ModalVideo from 'react-modal-video';
import Button from 'react-bootstrap/Button';

class VideoCustom extends Component {
  constructor(props) {
    super();
    this.state = {
      isOpen: false,
    };
    this.openModal = this.openModal.bind(this);
    this.idVideo = props.idVideo;
    this.video = props.video;
  }

  openModal() {
    this.setState({ isOpen: true });
  }

  render() {
    const { isOpen } = this.state;
    return (
      <div>
        <ModalVideo channel="youtube" isOpen={isOpen} videoId={this.idVideo} onClose={() => this.setState({ isOpen: false })} />
        <Button variant="primary" size="lg" block onClick={this.openModal}>{this.video}</Button>
      </div>
    );
  }
}

export default VideoCustom;
