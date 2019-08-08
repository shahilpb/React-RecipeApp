import React, { Component } from 'react'
import RecipeMain from '../Componant/RecipeMain';

export default class RecipePage extends Component {

    componentDidMount() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

    render() {
        return (
            <div>
              <RecipeMain/>
            </div>
        )
    }
}
