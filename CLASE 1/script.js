const obtenerAnakin = async () => {
    const respuesta = await fetch("https://swapi.dev/api/people/1" , { /* El await hace que el console.log aguarde a que se ejecute primero el fetch */
        method: "GET"
    })
    console.log(respuesta)
}


obtenerAnakin() 

const usuarios = [
    {   
        nombre: "Emi",
        edad: 49
    },
    {
        nombre: "Dalia",
        edad: 32
    },
    {
        nombre: "Juan",
        edad: 25
    },
]
console.log(usuarios)
usuarios.forEach((usuario,índice,listaDeUsuarios) => {
    console.log("hola!",usuario,índice)
})