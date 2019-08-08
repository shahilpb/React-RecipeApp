import React, { Component } from 'react'
import RecipeSearch from './RecipeSearch';
import RecipeChild from './RecipeChild';

export default class RecipeList extends Component {
    
 render() {

        const {recipies,handleChange,handleSubmitSearch,SearchValue,error} = this.props;

        return (
            <React.Fragment>
                <RecipeSearch handleChange={handleChange} handleSubmitSearch={handleSubmitSearch} SearchValue={SearchValue}/>

                <div className="container my-5"></div>
                {/* title */}
                <div className="row">
                    <div className="col-12 mx-auto col-md-6 text-center text-uppercase mb-3">
                        <div className="text-slanted"> 
                        <h1>Recipe List</h1>
                        </div>
                    </div>
                </div>
                <div className="row mx-5">
                
                {error?<h1 className="text-danger text-center">{error}</h1> :  recipies.map(recipe =>{
                       return (
                       <RecipeChild key={recipe.recipe_id}
                            Recipe_item = {recipe}  handleDetailchildIndex={this.props.handleDetailListkIndex}/>
                     )
                   })}
                </div>
            </React.Fragment>
        )
    }
}
