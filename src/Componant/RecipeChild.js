import React, { Component } from 'react'
import ImageModal from './ImageModal';

export default class RecipeChild extends Component {

constructor(props) {
  super(props)

  this.state = {
    isOpen: false 

  }
}


handleShowDialog = () => {
  this.setState({ isOpen: !this.state.isOpen });
  console.log('cliked');
};

closeImageModalHandler =(value)=>{
  console.log(value)
 this.setState({
   isOpen:value
 })
}

    render() {
       const {
        publisher,
        title,
        source_url,
        image_url,
        recipe_id
       } = this.props.Recipe_item
        
        return (
            <React.Fragment>
           <div className="col-10 mx-auto col-md-6 col-lg-4 my-3">

           <ImageModal show ={this.state.isOpen} image_url={image_url} closeClick={this.closeImageModalHandler}/>
                     
                      <div className="card">
              <img onClick={() => this.setState({isOpen:true})} className="card-img-top" style={{height:"14rem"}} alt="recipeimage" src={image_url} /> 
              <div className="card-body text-capitalize">
                <h6 className="card-title">{title}</h6>
                <h6 className="text-warning text-slanted">Provided By {publisher}</h6>
              </div>
              <div className= "classfooter">
                  <button type="button" className="btn btn-primary text-capitalize m-2" onClick={()=>this.props.handleDetailchildIndex(0,recipe_id)}>details</button>

        <a href={source_url} className ="btn btn-primary mx-2 mr5 text-capitalize" rel="noopener noreferrer" target="_blank"> recipe url</a>
              </div>
            </div>

           </div>
        </React.Fragment>
        )
    }
}
