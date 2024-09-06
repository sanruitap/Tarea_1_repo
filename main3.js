const diaSemana = new Date().getDay(); // 0 es domingo y 6 es sábado
const hora = new Date().getHours(); // Hora actual (0 a 23)

//3.B EN esta parte el Lunes(1) a viernes (5) yyyyyy hora (9) son las 9 am y hora (17) son las 5pm.

if (diaSemana >= 1 && diaSemana <= 5) {
    
if( hora>=9 && hora< 17){
    document.write( "La tienda esta abierta")
} else {
    document.write("La tienda esta cerrada")
}
} else {
    document.write("La tienda no abre los weekends")
}

 


//Pregunta: Es correcto meter 2 IF juntos como en las lineas 6 y 8?
   


// Escribe un programa que determine si una tienda esta abierta. La tienda abre de lunes a viernes de 9A.M a 5P.M. 
// Si hoy es sabado o domingo, la tienda está cerrada. Para ello debes crear una variable (const diaDeSemana) y otra (const hora).