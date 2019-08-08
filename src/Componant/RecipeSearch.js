import React, { Component } from 'react'

export default class RecipeSearch extends Component {
   

    render() {
        const {handleChange,handleSubmitSearch,SearchValue} = this.props;

        
        return (
            <React.Fragment>
            
         <div className="container">
            <div className="row">
                <div className="col-10 mx-auto col-md-8 mt-5 text-center">
                <h1 className="text-slanted text-capitalize"> search for recipe with {""} <strong className="text-danger"> Food2Fork </strong> </h1>

                <form className="mt-4" onSubmit={handleSubmitSearch} >
                    <label htmlFor="Search" className="text-capitalize"> Type recipe seperate by comma</label>
                    <div className="input-group">
                    <input type ="text" value={SearchValue} onChange={handleChange} name="Search" className="form-control" placeholder ="chicken,onions,carrots" />
                    <div className="input-group-append">
                        <button type="submit" className="input-group-text bg-primary text-white">
                        <i className="fas fa-search"></i>
                        </button>
                    </div>
                    </div>
                </form>

                </div>
            </div>

         </div>

        </React.Fragment>
        )
    }
}

