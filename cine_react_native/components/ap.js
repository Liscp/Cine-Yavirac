const getData=async()=>{
    const url = 'http://localhost:4000/cartelera';
    
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
          
          return jsonResponse.map(business => ({
            titulo : business.titulo,
            resumen: business.resumen,
            categoria: business.categoria,
            valorBoleto: business.valorBoleto
          }));
        }throw new Error('Request failed!')
      }catch(error){
        return []
      }
    }  
export default getData;