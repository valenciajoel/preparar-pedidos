const tiempoEnsalada = 2;
const tiempoHamburguesa = 3;
const tiempoBebida = 4;

async function prepararEnsalada(){
    const pedido = await new Promise((resolve) =>{
        setTimeout(() => {resolve("Ensalada Cesar")},tiempoEnsalada * 1000)
    });
    return pedido;
}

async function prepararHamburguesa(){
    const pedido = await new Promise((resolve) =>{
        setTimeout(() => {resolve("Doble Bacon")},tiempoHamburguesa * 1000)
    });
    return pedido;
}

async function prepararBebida(){
    const pedido = await new Promise((resolve) =>{
        setTimeout(() => {resolve("Coca-Cola")},tiempoBebida * 1000)
    });
    return pedido;
}

Promise.all([
    prepararEnsalada(),
    prepararHamburguesa(),
    prepararBebida(),
])
.then((resultados) => {
    console.log("Su pedido esta listo:")
    resultados.forEach((resultado) => {
        console.log("* " + resultado);
    })
})
.catch((error) => {
    console.error("Upsss, hubo un error", error);
})