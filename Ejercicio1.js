
/*1. Solicitar al usuario que responda a la pregunta (“¿Eres bellisimo/a?”), en caso de contestar sí, 
responder “Ciertamente”, en caso de contestar no, responder: “No te creo”.*/

let pregunta = prompt('¿Eres bellisimo/a?').toLowerCase()

if (pregunta === 'si'){
    alert('Ciertamente')
}else{
    alert('No te creo')
}

/*2. Solicitar al usuario un número, y determinar si es divisible entre dos o no. 
Mostrando al usuario un mensaje de “x número es divisible entre 2” o “x núm no es divisible entre 2”.*/

let num = prompt('Elige un número')

if (num%2 == 0){
    alert(`El ${num} es divisible entre 2`)
}else{
    alert(`El ${num} no es divisible entre 2`)
}

/* 3. Crear un programa que determine si un 
número introducido en un Prompt es par o no, la respuesta será mostrada en un Alert. */

let num2 = prompt('Elige un número')

if (num2%2 == 0){
    alert(`El ${num} es par`)
}else{
    alert(`El ${num} no es par`)
}

/* 4. Solicitar al usuario un número de cliente. Si el número es el 1000, imprimir 'Ganaste un premio', 
en caso contrario mostrar el número y el mensaje “Lo sentimos, sigue participando”.*/

let num3 = prompt('Ingresa tu número de cliente')

if (num3 == 100){
    alert(`Ganaste un premio`)
}else{
    alert(`${num3}, Lo sentimos, sigue participando`)
}

/* 5. Solicitar al usuario que ingrese dos números y mostrar cuál de los dos es menor. 
No considerar el caso en que ambos números son iguales.*/

let num4 = prompt('Elige un número')
let num5 = prompt('Elige otro número')

if(num4<num5){
    alert(`El numero ${num4} es menor`)
}else{
    alert(`El numero ${num5} es menor`)
}

/* 6. Solicitar al usuario que ingrese tres números y mostrar cuál de los tres es el 
número mayor. Considerar el caso en que 2 números sean iguales.*/

let num6 = parseFloat(prompt('Elige un primer número'))
let num7 = parseFloat(prompt('Elige un segundo número'))
let num8 = parseFloat(prompt('Elige un tercer número'))

if(num6<num7){
    if(num7<num8){
        alert(`El número ${num8} es el mayor`)
    }else if (num8<num7){
        alert(`El número ${num7} es el mayor`)
    }else{
        alert(`Los números ${num8} y ${num7} son iguales`)
    }
}else if(num7<num6){
    if(num6<num8){
        alert(`El número ${num8} es el mayor`)
    }else if (num8<num6){
        alert(`El número ${num6} es el mayor`)
    }else{
        alert(`Los números ${num8} y ${num6} son iguales`)
    }
}else if(num7==num6){
    alert(`Los números ${num6} y ${num7} son iguales`)
}else if(num7 == num8 == num9){
    alert(`Todos los números son iguales`)
}else{
    alert(`Datos Erroneos`)
}

/* 7. Requerir al usuario que ingrese un día de la semana e imprimir un mensaje si es lunes, 
otro mensaje diferente si es viernes, otro mensaje diferente si es sábado o domingo. 
Si el día ingresado no es ninguno de esos, imprimir otro mensaje.*/

let diaDeLaSemana = prompt('Escribe un dia de la semana').toLocaleLowerCase()

if(diaDeLaSemana === 'lunes'){
    alert(`Que tengas un buen ${diaDeLaSemana}`)
}else if (diaDeLaSemana === 'viernes'){
    alert(`Que tengas buen ${diaDeLaSemana}`)
}else if (diaDeLaSemana === 'sabado' || diaDeLaSemana === 'domingo'){
    alert(`Que tengas bonito fin de semana`)
}else if (diaDeLaSemana === 'martes' || diaDeLaSemana === 'miercoles' || diaDeLaSemana ==='jueves'){
    alert('Ten un bonito dia')
}else{
    alert('Error de dato')
}

/*8. Solicitar al usuario una calificación (entre 1 y 10). Luego se debe comprobar que el número efectivamente esté en 
ese rango, si no lo está imprima un mensaje de error. Si lo está, imprima “reprobado” si la calificación es inferior a 6, 
“regular” si está entre 6 y 8, “bien” si es 9, y por último, “excelente” si es 10. */ 

let calificacion = parseFloat(prompt('Ingresa una calificacion'))

if(calificacion === 10){
    alert('Excelente')
}else if(calificacion === 9){
    alert('Bien')
}else if(calificacion >= 6 && calificacion <= 8){
    alert('Regular')
}else if(calificacion < 6 && calificacion >= 0){
    alert('Reprobado')
}else{
    alert('Error de datos')
}

/* 9. Escribe un programa que responda a un usuario que quiere comprar un helado en una conocida marca de 
comida rápida cuánto le costará en función del topping que elija.
El helado sin topping cuesta 50 MXN.
El topping de oreo cuesta 10 MXN.
El topping de KitKat cuesta 15 MXN.
El topping de brownie cuesta 20 MXN.
En caso de no disponer del topping solicitado por el usuario, el programa le indicará 
“no tenemos este topping, lo sentimos.” y a continuación le informará el precio del helado sin ningún topping.
*/

let respuesta = prompt('Quieres un helado').toLocaleLowerCase()
let precioFinal = 0
if(respuesta === 'si'){
    precioFinal += 50
    let toppingOreo = prompt('Quieres topping de Oreo').toLocaleLowerCase()
    toppingOreo === 'si' ? precioFinal += 20 : precioFinal +=0
    let toppingKitKat = prompt('Quieres topping de KitKat').toLocaleLowerCase()
    toppingKitKat === 'si' ? precioFinal += 15 : precioFinal += 0
    let toppingBrownie = prompt('Quieres topping de Brownie').toLocaleLowerCase()
    toppingBrownie === 'si' ? precioFinal += 10 : precioFinal += 0
    alert(`El costo de tu helado es de ${precioFinal}`)

}else if(respuesta === 'no'){
    alert(`Vuelve pronto`)
}else{
    alert('Error de datos')
}

/* 10. Un conocido portal de educación en tecnología está ofreciendo programas para aprender a desarrollar aplicaciones. 
Escribe un programa que le indique a la persona interesada cuánto deberá pagar mensualmente de acuerdo a la opción elegida.
El programa educativo contempla 3 diferentes niveles, cada uno con su costo mensual: Course: $4999 MXN
Carrera $3999 MXN
Master: $2999 MXN
Adicionalmente preguntar si cuenta con alguna beca y aplicar el descuento correspondiente al precio final.
Beca Facebook: 20% de descuento.
Beca Google: 15% de descuento.
Beca Jesua: 50% de descuento.
Finalmente, además del precio mensual con descuento, indicar al usuario cuánto gastaría en total por el curso elegido, 
tomando en cuenta las siguientes duraciones:
Course: 2 meses
Carrera 6 meses
Master: 12 meses */ 

alert('Buen dia, sabemos que estas interesado/a en la beca')

let opciones = prompt('Elige el curso que más te agrade \n1.- Course: $4999 MXN   \n2.-Carrera $3999 MXN   \n3.-Master: $2999 MXN')
let precio = 0
switch(opciones){
    case '1':
        precio = precio + 4999;
        opciones = 'Course'
        break
    
    case '2':
        precio = precio + 3999;
        opciones = 'Carrera'
        break
    
    case '3':
        precio = precio + 2999;
        opciones = 'Master'
        break
    
    default:
        alert('Error de datos')
}


let descuento = prompt('¿Tienes alguna Beca?').toLocaleLowerCase()
let precioFinal2 = 0
let becas = 0
if(descuento === 'si'){
    let beca = prompt('Elige la beca que tienes \n1.- Beca Facebook: 20% de descuento \n2.- Beca Google: 15% de descuento \n3.- Beca Jesua: 50% de descuento')
    switch(beca){
        case '1':
            precioFinal2 = (precio * 0.8);
            becas = ' con Beca Facebook'
            break
        case '2':
            precioFinal2 = (precio * 0.85);
            becas = 'con Beca Facebook'
            break
        case '3':
            precioFinal2 = (precio * 0.5);
            becas = 'con Beca Jesua'
            break
        default:
            alert('Error')
    }
}else if(descuento === 'no'){
    precioFinal2 = precio
    becas = 'sin beca'    
}else{
    alert('Error')
}

let duracion = prompt('1.- Course: 2 meses \n2.- Carrera 6 meses \n3.- Master: 12 meses')
let precioFinal3 = 0

switch(duracion){
    case '1':
        precioFinal3 = precioFinal2 * 2;
        duracion = '2 meses'
        break
    case '2':
        precioFinal3 = precioFinal2 * 6;
        duracion = '6 meses'
        break
    case '3':
        precioFinal3 = precioFinal2 * 12;
        duracion = '12 meses'
        break
    default:
        alert('Error')
}

alert(`El curso de ${opciones} que tiene una duracion de ${duracion} tiene un costo total de ${precioFinal3} ${becas} `)

/* 11. Realizar un programa que ayude a calcular el total a pagar de acuerdo a la distancia recorrida 
por un vehículo con cargo extra por los litros consumidos, tomando en consideración lo siguiente:
Si el vehículo es “coche”, el precio kilometro ha de ser 0.20, si es “moto” ha de ser 0.10 y si es “autobús” 0.5.
Si los litros consumidos están entre 0 y 100 se ha de añadir 5 al costo total, 
si es mayor la cantidad de litros consumidos se ha de añadir 10 al total. Considere qué:
total a pagar = (precio kilometro x kms recorridos) + extra por litros consumidos.*/

let vehiculo = prompt('En que vehiculo hiciste tu viaje \n1.- Carro \n2.- Moto \n3.Camion').toLocaleLowerCase()
let precioTotal = 0
let vehiculoUso = 0

switch(vehiculo){
    case 'carro':
        vehiculoUso = .20
        break
    case 'moto':
        vehiculoUso = .10
        break
    case 'camion':
        vehiculoUso = .5
    default:
        alert(Error)
        break
}

let kilometros = parseFloat(prompt('¿Cuántos kilometros recorriste?'))

precioTotal = kilometros * vehiculoUso

if (kilometros >= 0 && kilometros <= 100){
    precioTotal += 5
}else if(kilometros>100){
    precioTotal += 10    
}else{
    alert('Error')
}

alert(`El precio total es de ${precioTotal}`)