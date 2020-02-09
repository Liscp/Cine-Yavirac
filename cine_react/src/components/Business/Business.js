import React from 'react';
import './Business.css'
class Business extends React.Component{
    
    render(){
      const {business} = this.props;
        return(
            <div className="Business">
  <div className="image-container">
    <img src='https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg' alt=''/>
    <h1>{business.titulo}</h1>
  </div>
        
  <h2>{business.resumen}</h2>
  <div className="Business-information">
    <div className="Business-address">
      <p>{business.categoria}</p>
      <p>{business.valorboleto}</p>
      
    </div>
    
  </div>
</div>
        )
    }
}
export default Business;
 