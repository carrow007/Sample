import React, { Component } from 'react';
import { Modal, Button, Profiles } from 'react-bootstrap';
import './Widget.css'


class Widget extends Component {
  constructor(props) {
    super(props)
    this.state = {
    show: true
  }
}

  showModal() {
    this.setState({show: false});
  }

  hideModal() {
    this.setState({show: false});
  }

  render() {
    return (
      <div>

        <Modal show={this.state.show} onHide={() => this.hideModal()}>
          <Modal.Header closeButton>
          </Modal.Header>
          <Modal.Body className="modalbody">
            <h1 className="mainhead">Book Direct Get Rewarded</h1>
              <h4 className="minorhead">Get 3 Free Rewards Like</h4>
              <div className="imageone">
              </div>
              <div className="imagetwo">
              </div>
              <div className="imagethree">
              </div>

          </Modal.Body>

          <Modal.Footer className="footer">
            <Button className="button"> Book Now + Get Free Rewards</Button>
            <p className="footerpara">
              Best Rates Garunteed
            </p>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default Widget;
