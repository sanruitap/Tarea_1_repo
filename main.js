//1.A En esete punto la idea es definir la const de mayor de edad y que el sistema le pregunte la edad al usuario con un prompt.
//  Tambien voy a crear la const "sub" con un =true
const edad = Number(prompt("Que edad tienes?"))
const subs = true

//1.B En este punto se tiene que cumplir al mismo tiempo que el usuario tenga al menos 18 años y que tenga la subscripcion. Seria un &&
if (edad >= 18 && subs){
    document.write("Bienvenido")
}else{
    document.write("No puedes entrar. No tienes edad sufuciente o te falta la subscripción")
}

//Pregunta: Por que de esta forma no funciona? :

// if (edad >= 18){
//     document.write("Bienvenido adulto responsable.")

// } else if ( subs){
//     document.write("Bienvenido adulto responsable.")
// } else {
//     document.write{"no puedes entrar"}
// }




