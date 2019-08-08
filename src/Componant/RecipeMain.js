import React, { Component } from 'react'

import RecipeDetail from './RecipeDetail'
import RecipeList from './RecipeList'
import {recipes} from '../tempList'



export default class RecipeMain extends Component {

  constructor(props) {
    super(props)
  
    // 90424a001ccfd5f771d1e84f08581dcd
    // 6ec9a26bb3a306482eed515531171a94

    this.state = {
       Recipe:recipes,
      url:"http://www.mocky.io/v2/5d4171af3100006b005393d2",
      Detail_Id:35382,
      pageIndex:1,
      searchValue:'',
      buildUrl:"https://www.food2fork.com/api/search?key=90424a001ccfd5f771d1e84f08581dcd",
      query: '&q=',
      error:""
    }
  }
// Get recipe List from thirdpary api  
  async fetchData(){
 
    try{
      const data = await fetch (this.state.url)
      const jsonData = await data.json()
      console.log(jsonData);
      
      if(jsonData.recipes.length===0){
        this.setState({
          error:"No Results found for :"+this.state.searchValue +" Try searching for somthing else",
          searchValue:""
        })
      }else{
        this.setState({
          Recipe : jsonData.recipes
        })
      }
    }
    catch(error){
      console.log(error);
  }
  }

  componentDidMount() {
    this.fetchData();
  }

// conditionRendering 
 displayPage = (index)=>{

  switch(index){
    case 1 : 
      return <RecipeList  
      changeEvent={this.handleChangeText} 
      recipies={this.state.Recipe} 
      handleDetailListkIndex={this.handleDetailkIndex}
      handleChange={this.handleChangeText}
      handleSubmitSearch={this.handleSubmitSearch}
      searchValue={this.state.searchValue}
      error={this.state.error}
      />
    case 0 :
      return   <RecipeDetail id={this.state.Detail_Id} handleClick ={this.handleBackClickIndex}/>
    default:
  }
}

// handle the back button from recipe detail component

handleBackClickIndex =(index) =>{
  this.setState({
    pageIndex:index
  })
}

// handle the detail click event in recipe list component
handleDetailkIndex =(index,id) =>{
  this.setState({
    pageIndex:index,
    Detail_Id:id
  })
}

// Handle the on change event
handleChangeText=(event)=>{
  this.setState( {
      searchValue:event.target.value,
      error:"" 
  })
}


// Handle the on submit click  event
handleSubmitSearch=(e)=>{
  e.preventDefault();

  const ur = this.state.buildUrl+this.state.query+ this.state.searchValue;
  console.log(ur)

  this.setState({
    url:ur
  },()=>{
    this.fetchData();
  })
  }
  

  render() {
    return (
      <React.Fragment>
       {this.displayPage(this.state.pageIndex)} 
   </React.Fragment>
    )
  }
}
