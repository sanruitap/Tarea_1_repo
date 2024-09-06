//2.A En este punto voy a crear la const de miembros o masCienMil

const miembros = true // esto es true interno.
const compraCliente = prompt("Cuanto dinero pagó en total?")


//2.B En este punto : O se cumple que miembros sea true o que masCienMil sea mayor o igual que 100000. Esto seria con ||

if ( compraCliente>= 100000 || miembros) {  // o mayor a 100000 o miembros sea true,
    document.write("Tu descuento es del 10%")

} else{
    document.write("No eres elegible para descuento")
}









// Cree un programa para una tienda, donde los clientes obtienen un descuento bajo ciertas condiciones.
//  Si son miembros del club de la tienda o si han comprado más de $100.000, obtienen un descuento del 10%.