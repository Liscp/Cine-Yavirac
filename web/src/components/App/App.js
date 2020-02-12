import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar'
import BusinessList from '../BusinessList/BusinessList'


class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      businesses: [],
    }
    this.getData=this.getData.bind(this)
  }
  getData=async()=>{
    const url = 'http://localhost:4000/cartelera'
    if(this.state.businesses != []){
      try{
        const response = await fetch(url,{
          method: 'GET',
          headers:{
            'Content-type': 'application/json'
          }
        })
        console.log(response)
        if(response.ok){
          const jsonResponse = await response.json()
          this.setState({
            businesses: await jsonResponse
          })
          console.log(this.state.businesses)
          
          return jsonResponse
        }throw new Error('Request failed!')
      }catch(error){
        console.log(error)
      }
    }
    alert('No existe ninguna película en Cartelera por favor crea una película')
    
   
  }

  render(){
  return (
    <div className="App">
  <h1>CINE YAVIRAC</h1>
  <SearchBar />
  <div className="SearchBar-submit">
          <a onClick={this.getData}>Mostrar Cartilla</a>
  </div >
 
  <BusinessList businesses={this.state.businesses}/>
  
</div>
  )
}
}

export default App;
