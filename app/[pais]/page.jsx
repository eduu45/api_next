const cargarPaises = (pais) => {
    return fetch(`https://restcountries.com/v3.1/name/${pais}`)
      .then(response => response.json())
      .then(valores => valores[0])
  }
  

async function page({params}) {
    const {pais} = params;
    const datos =await cargarPaises(pais)
    return(
    <>
   <h1>{datos.name.common} ({datos.region})</h1> 
  <h2>{datos.capital}</h2> 
  <img src={datos.flags.png} alt="bandera-del-pais"/>
    </>    
    )
}

export default page;