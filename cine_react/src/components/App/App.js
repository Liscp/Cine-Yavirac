import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar'
import BusinessList from '../BusinessList/BusinessList'
import Yelp from '../../until/Yelp'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      businesses: [],

    }
    this.searchYelp=this.searchYelp.bind(this)
    this.obtencion=this.obtencion.bind(this)

  }
  searchYelp(){
    Yelp.then((businesses)=>{
    this.setState({
      businesses: businesses
    })
  })
}
  obtencion(){
    Yelp.search().then((businesses)=>{
      this.setState({
        businesses: businesses
      })
    })
  }
  // getData=async()=>{
  //   const url = 'http://localhost:4000/cartelera'
  //   try{
  //     const response = await fetch(url,{
  //       method: 'GET',
  //       headers:{
  //         'Content-type': 'application/json'
  //       }
  //     })
  //     console.log(response)
  //     if(response.ok){
  //       const jsonResponse = await response.json()
  //       business=jsonResponse
  //       console.log(business)
        
  //       return jsonResponse
  //     }throw new Error('Request failed!')
  //   }catch(error){
  //     console.log(error)
  //   }
  // }

  render(){
  return (
    <div className="App">
  <h1>{this.state.titulo}</h1>
  <SearchBar searchYelp={this.searchYelp}/>

    <div className="SearchBar-submit">
          <a onClick={this.obtencion}>Crear Peicula</a>
  </div>
  <BusinessList businesses={this.state.businesses}/>
  
</div>
  )
}
}

export default App;
