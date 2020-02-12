import React from 'react';
import './Business.css'
class Business extends React.Component{
    
    render(){
      const {business} = this.props;
        return(
            <div className="Business">
  <div className="image-container">
    <img src='https://www.elsoldemexico.com.mx/gossip/jlsc22-sonic-la-pelicula.jpg/ALTERNATES/LANDSCAPE_400/Sonic-La-Pelicula.jpg' alt=''/>
    
  
  </div>
  <div className="Business-information">
    <div className="Business-address">
      <h3>Titulo</h3>
  <h6>{business.titulo}</h6> 
  <h3>Resumen</h3>
  <h6>{business.resumen}</h6>
  <h3>Categoria</h3>
  <h6>{business.categoria}</h6>
  <h3>Valor del Boleto</h3>
  <h6>{business.valorboleto}</h6>
    
  </div>
  </div>
  
    
  </div>

        )
    }
}
export default Business;
 