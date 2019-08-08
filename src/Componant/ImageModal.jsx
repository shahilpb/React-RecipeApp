import React, { Component } from 'react'
import Modal from 'react-bootstrap/Modal'


export default class ImageModal extends Component {

componentDidMount() {
    document.addEventListener('keyup', (e) => {
        if (e.keyCode === 27) this.props.closeClick(false);
    });
}

    
    render() {
        return (
            <div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
      <Modal 
      show={this.props.show}
            aria-labelledby="contained-modal-title-vcenter"
            centered>

      <Modal.Header closeButton onClick={() => this.props.closeClick(false)}> 
       </Modal.Header>
        
     
      <Modal.Body>
            <img src={this.props.image_url}  
            style={{
                maxWidth:"100%",
                display:'flex',alignItems:'center',justifyContent:'center',
                maxHeight:"100%"
                }} alt="largeImage"/>
      </Modal.Body>
      
    </Modal>
                       </div> 
        )
    }
}
