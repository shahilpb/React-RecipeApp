import React, { Component } from 'react'
import {recipe} from '../tempDetails'



export default class RecipeDetail extends Component {

   
    // 6ec9a26bb3a306482eed515531171a94
    // 90424a001ccfd5f771d1e84f08581dcd
    constructor(props) {
        super(props)
    const buildUrl = "https://www.food2fork.com/api/get?key=90424a001ccfd5f771d1e84f08581dcd&rId="+this.props.id
    this.state = {
            //  recipeDetail:recipe ,
            recipeDetail:recipe ,
            url: buildUrl
        };
    }
async componentDidMount() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    try{
        const data = await fetch (this.state.url)
        const jsonData = await data.json()
    
        this.setState({
            recipeDetail : jsonData.recipe
        },()=>{
            console.log("Recipe Details ",this.state.recipeDetail);
        })
      }
      catch(error){
        console.log(error);
    }
    
}

    
    render() {
    
        // const ingredian =;
        return (
            <React.Fragment>
                {<div className="container">
                    <div className="row">
                        <div className ="col-10 mx-auto col-md-6 my-3">

                            <button onClick= {()=>this.props.handleClick(1)}
                            type="button"
                            className ="btn btn-warning mb-5 text-capitalize text-light">
                                Back to racipe List
                            </button>

                              <img src={this.state.recipeDetail.image_url} alt="recipeDetail" className="d-block w-100"/>
                        </div>
                        {/* details */}
                    <div className="col-10 mx-auto col-md-6 my-3">
                        <h6 className="text-uppercase"> {this.state.recipeDetail.title} </h6>
                        <h6 className="text-warning text-capitalize text-slanted"> Provided by: 
                        {this.state.recipeDetail.publisher}</h6>
                        <a href={this.state.recipeDetail.source_url} target="_blank" rel="noopener noreferrer" 
                        className="btn btn-primary m-2 text-capitalize">Publisher Webpage</a>
                        
                        <a href={this.state.recipeDetail.publisher_url} target="_blank" rel="noopener noreferrer" 
                        className="btn btn-success m-2 text-capitalize">Recipe Url</a>

                        <ul className="list-group mt-4">
                            <h2 className="mt-3 mb-4"> Ingrediants </h2>
                            {
                               this.state.recipeDetail.ingredients.map((ingredian,index) =>{
                                    return (
                                        <li key={index} className="list-group-item text-slanted">
                                        {ingredian}</li>)   
                                })
                            }
                        </ul>
                        
                    </div>


                    </div>
                </div> }
        </React.Fragment>
        )
    }
}
