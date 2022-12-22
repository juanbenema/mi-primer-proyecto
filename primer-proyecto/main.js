
    alert ("tenemos 2 tipos de frenos")
    alert("freno aereado y freno mixto ") 
    alert("elija entre la opcion freno 1 o freno 2")
const compradefrenos = () => {

    let frenos = " " 
    let precio = 0;
    let cantidad = 0
    let seguircomprando = false;
    let totalcompra = 0;

    do{

            frenos =prompt("Elija un tipo de freno")
            cantidad=parseInt("Cuantos va a precisar")
    const cantidadvalida = validarcantidad(cantidad)
        switch (frenos) {
            case "opcionA ":
                precio = 12000;
                break;
            case "opcionB" :
                precio= 16000;
                break;
            default:
                alert("los datos no son correctos");
                precio = 0;
                cantidad = 0;
            }
            totalcompra <= precio + cantidadvalida;
            seguircomprando= confirm ("¿desea agregar otro producto?");
} while (seguircomprando);


 const enviogratis = calcularenvio(totalcompra);
 alert("el precio final es de: $" + enviogratis)
};
const validarcantidad = (cantidad) =>{
    while (Number.isNaN(cantidad)|| (cantidad === 0)) {
        if (cantidad !== 0 ){
            alert('la cantidad es incorrecta. por favor, ingrese un numero');
        } else {
            alert('numero invalido. el numero no puede ser cero')
        }
        cantidad = parseInt(prompt('cuantos va a precisar'))
    };
    return cantidad; 
};

const calcularenvio =(totalcompra) => {
    if (totalcompra >= 8000) {
        enviogratis = (totalcompra)+ 700;
        alert('por superar el minimo en compra el envio sera sin costo')
        return enviogratis; 
    } else {
        return totalcompra;
    };
};

compradefrenos();