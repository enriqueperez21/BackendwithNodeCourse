//async Necesario para funciones asincrones

//Sino es una funcion asincrona, no se puede usar el await
async function obtenerPokemon(nombrePokemon) {
    const urlAPI = `https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`;
    const urlAPI2 = "https://pokeapi.co/api/v2/pokemon/"+nombrePokemon
    try {
      const respuesta = await fetch(urlAPI);
      const datosPokemon = await respuesta.json();
  
      if (respuesta.status !== 200) {
        throw new Error(`Error al obtener datos del Pokémon: ${respuesta.status}`);
      }
      
      const nombre = datosPokemon.name;
      const id = datosPokemon.id;
      const tipo = datosPokemon.types[0].type.name;
      const imagen = datosPokemon.sprites.front_default;
      console.log("-------------------------- \n")
      console.log(`Nombre: ${nombre}`);
      console.log(`ID: ${id}`);
      console.log(`Tipo: ${tipo}`);
      console.log(`Imagen: ${imagen}`);
    } catch (error) {
      console.error(`Error al obtener datos del Pokémon: ${error.message}`);
    }
  }
  console.log("Primera linea")
  obtenerPokemon('charmander');
  console.log("Segunda linea de ejecución")