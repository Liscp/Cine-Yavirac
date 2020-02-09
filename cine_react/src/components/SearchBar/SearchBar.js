import React from 'react';
import './SearchBar.css'

let url = 'http://localhost:4000/user';


class SearchBar extends React.Component{
  constructor(props){
    super(props)
    this.state= {
      titulo: '',
      resumen: '',
      categoria: '',
      valorboleto: ''
    }
    this.handleSearch=this.handleSearch.bind(this)
    this.primero=this.primero.bind(this)
    this.segundo=this.segundo.bind(this)
    this.tercero=this.tercero.bind(this)
    this.cuarto=this.cuarto.bind(this)
  }
  handleSearch(event){
    this.props.searchYelp(this.state.titulo,this.state.resumen, this.state.categoria, this.state.valorboleto);
    Object.keys(this.state).map(sortByOption=>{
      let sortByOptionValue = this.state[sortByOption];
      return (
          <li key={sortByOptionValue} > {sortByOption}></li>
      )
  })
    event.preventDefault();
  }
  primero(event){
    this.setState({titulo: event.target.value})
  }
  segundo(event){
    this.setState({resumen: event.target.value})
  }
  tercero(event){
    this.setState({categoria: event.target.value})
  }
  cuarto(event){
    this.setState({valorboleto: event.target.value})
  }

  direccion(e){
    const name = e.target.value;
    if(name === 'Crear'){
      url= 'http://localhost:4000/user'
    }else if(name === 'Borrar'){
      url = 'http://localhost:4000/user/delete'
    }else if (name === 'Actualizar'){
      url = 'http://localhost:4000/user/update'
    }
  }
  envio=async()=>{

    const data = JSON.stringify({
      titulo: this.state.titulo,
      resumen: this.state.resumen,
      categoria: this.state.categoria,
      valorboleto: this.state.valorboleto
    })
    try{
      const response = await fetch(url,{
        method: 'POST',
        
        body: data,
        headers:{
          'Content-type': 'application/json'
        }
      })
      if (response.ok){
        console.log('respuesta favorable')
      }
    }catch(error){
      console.log(error)
    }
  }
    
  renderSortByOptions(){
    return  Object.keys(this.state).map(sortByOption=>{
        let sortByOptionValue = this.state[sortByOption];
        return (
            <li key={sortByOptionValue} > {sortByOption}></li>
        )
    })
}
  
 
    render(){
        return(
            <div className="SearchBar">
  <div className="SearchBar-sort-options">
  </div>
  <div className="SearchBar-fields">
    <input placeholder="Tituo" onChange={this.primero}/>
    <input placeholder="Resumen" onChange={this.segundo}/>
    <select id="great-names" onChange={this.tercero}>
          <option value="Comedia">
            Comedia
          </option>

          <option value="Terror">
            Terror
          </option>

          <option value="Drama">
            Drama
          </option>
      </select>
    <input placeholder="Valor Boleto" onChange={this.cuarto}/>
    <select id="great-names" onChange={this.direccion}>
          <option value="Crear">
            Crear
          </option>

          <option value="Borrar">
            Borrar
          </option>

          <option value="Actualizar">
            Actualizar
          </option>
      </select>
  </div>
  <div className="SearchBar-submit">
          <a onClick={this.envio}>Crear Peicula</a>
  </div>
        <h1>{this.state.titulo}</h1>
</div>
        )
        
    }
}

export default SearchBar;