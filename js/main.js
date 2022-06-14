// promesa y libreria
var total_registros = []
var habitaciones;

// Modal inicio paises

document.getElementById("mostrar_paises").click();

document.getElementById('cerra_pais').addEventListener('click',()=>{
    document.getElementById("pais_modal").click()
    document.getElementById("pais").textContent=document.getElementById("seleccionar_pais").value
})

// cantidad de reservaciones

var cantidad_habitaciones = 95
var habitaciones_ocupadas = 3
var total_habitaciones = 0


// buscador
fetch('huespedes.json')
            .then(function(res){
                return res.json();
            })
            .then(function(data){
                for (let i = 0; i < data.length; i++) {
                const li = document.createElement("li")
                const div = document.getElementById("cargar_nombres")
                li.textContent=`${data[i].nombre} ${data[i].apellido}`
                div.appendChild(li)}
            })

setTimeout(() => {
    document.getElementById('buscador').addEventListener('click',()=>{
        let buscar = document.getElementById('buscar').value;
        let aux;
        fetch('huespedes.json')
            .then(function(res){
                return res.json();
            })
            .then(function(data){
                for (let i = 0; i < data.length; i++) {
                    if(buscar==`${data[i].nombre} ${data[i].apellido}`){
                        aux=true
                        break;
                    }else{aux=false}
                }
            })
            .then(function(){
                if(aux){
                    document.getElementById('alerta_success').textContent = 'Se encontró nombre';
                    document.getElementById('alerta_success').style.display = 'block';
                    document.getElementById('alerta_danger').style.display = 'none';
                    console.log('Se encontró el nombre')

                }else if(total_registros.length != 0){
                        for (let i = 0; i < total_registros.length; i++) {
                            if(buscar==`${total_registros[i].nombre} ${total_registros[i].apellido}`){
                                aux=true
                                break;
                            }else{aux=false}
                        }
                        if(aux){
                            document.getElementById('alerta_success').textContent = 'Se encontró nombre';
                            document.getElementById('alerta_success').style.display = 'block';
                            document.getElementById('alerta_danger').style.display = 'none';
                            console.log('Se encontró el nombre')
                        }else{
                            document.getElementById('alerta_danger').textContent = 'No se encontró nombre';
                            document.getElementById('alerta_danger').style.display = 'block';
                            document.getElementById('alerta_success').style.display = 'none';
                            console.log('No se encontró el nombre')}
                    }          
                else{
                    document.getElementById('alerta_danger').textContent = 'No se encontró nombre';
                    document.getElementById('alerta_danger').style.display = 'block';
                    document.getElementById('alerta_success').style.display = 'none';
                    console.log('No se encontró el nombre')}
            })
            .catch(function(error){
                console.log(error);
            });
    })
}, 2000);

// Operador Ternario
document.getElementById("guardar").addEventListener("click",guardar_click)

function guardar_click(){
    let miEdad = document.getElementById("edad").value;
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    var tipo_habitaciones = document.getElementById("tipo_habitacion").value;
    console.log(tipo_habitaciones)
    let disponibilidad = 0;
    let precio = 0;
    let cantidad_personas = 0;
    let mayorEdad = (miEdad >= 18) ? Swal.fire("Sos mayor de edad, podes reservar sin problemas") : (Swal.fire("No eres mayor de edad no puedes hacer una reserva") && window.stop());
    function saludar(){
        if ((nombre == null) || (nombre != confirm))
        document.getElementById("bienvenida").innerHTML ="Bienvenido/a";
        else(nombre !=null)
        document.getElementById("bienvenida").innerHTML ="Bienvenido/a " + nombre;
    }

    // registro persona
    habitaciones_ocupadas += 1 
    total_habitaciones = (habitaciones_ocupadas * cantidad_habitaciones)/100
    document.getElementById("disponibilidadGeneral").textContent="Total de habitaciones disponibles en el hotel: " + (cantidad_habitaciones - habitaciones_ocupadas) + " (" + (100-total_habitaciones) + "% de disponibilidad)"

    // agregar a la lista

    const li = document.createElement("li")
    const div = document.getElementById("cargar_nombres")
    li.textContent=`${nombre} ${apellido}`
    div.appendChild(li)

    saludar();
    const nuevo_registro = {
        "nombre": document.getElementById("nombre").value,
        "apellido": document.getElementById("apellido").value,
        "edad": document.getElementById("edad").value,
        "email": document.getElementById("email").value,
        "tipo_habitacion": document.getElementById("tipo_habitacion").value
    }
    total_registros.push(nuevo_registro)
    switch(tipo_habitaciones){
        case "TWIN" : precio = 6200; disponibilidad = 50; cantidad_personas=2; break;
        case "MAT" : precio = 6500; disponibilidad = 40; cantidad_personas=2; break;
        case "TPL" : precio = 7500; disponibilidad = 5; cantidad_personas=3; break;
    }
habitaciones = new habitacion(tipo_habitaciones,disponibilidad,precio,cantidad_personas)
console.dir(habitaciones)

habitaciones.sumaIva()


    respuesta = document.getElementById('tipo_habitacion').value;
    if(respuesta == "MAT"){
        cantidadMAT++;
        if(habitaciones.cantidad<=0){
            alert("No hay disponibilidad de habitaciones " + habitaciones.tipo + ".");
        }else {
            habitaciones.vender();
        }
        document.getElementById("otraHabitacion").style.display='block';
    }else if(respuesta == "TWIN"){
        cantidadTWIN++;
        if(habitaciones.cantidad<=0){
            alert("No hay disponibilidad de habitaciones " + habitaciones.tipo + ".");
        }else {
            habitaciones.vender();
        }
        document.getElementById("otraHabitacion").style.display='block';
    }else if(respuesta == "TPL"){
        cantidadTPL++;
        if(habitaciones.cantidad<=0){
            alert("No hay disponibilidad de habitaciones " + habitaciones.tipo + ".");
        }else {
            habitaciones.vender();
        }
        document.getElementById("otraHabitacion").style.display='block';
    }

document.getElementById("alert_primary").style.display="block"
document.getElementById("alert_primary").innerHTML=`
Usted reservó ${cantidadMAT} habitaciones Mat. <br>
Reservó ${cantidadTWIN} habitaciones Twin. <br>
Reservó ${cantidadTPL} habitaciones Tpl. <br>
El importe total a abonar es de $${(cantidadMAT * habitaciones.precio) + (cantidadTWIN * habitaciones.precio) + (cantidadTPL * habitaciones.precio)} finales con iva incluido.`

// calcular cuotas
const monto = document.getElementById("importe");
const tiempo = document.getElementById("cuotas");
const interes = "1.2";

calcularCuota(Number(monto.value), Number(interes), Number(tiempo.value));
console.log("monto: " + Number(monto.value))
console.log("interes: " + Number(interes))
console.log("tiempo: " + Number(tiempo.value))
document.getElementById("lista-tabla").style.display="inline-table"
}

document.getElementById("tipo_habitacion").addEventListener("click",()=>{
    var tipo_habitaciones = document.getElementById("tipo_habitacion").value;
    switch(tipo_habitaciones){
        case "TWIN" : precio = 6200; disponibilidad = 50; cantidad_personas=2; break;
        case "MAT" : precio = 6500; disponibilidad = 40; cantidad_personas=2; break;
        case "TPL" : precio = 7500; disponibilidad = 5; cantidad_personas=3; break;
    }
    habitaciones = new habitacion(tipo_habitaciones,disponibilidad,precio,cantidad_personas)
    console.dir(habitaciones)

    habitaciones.sumaIva()
    document.getElementById("importe").value = habitaciones.precio;

})

// Registro o buscador de huespedes

addEventListener('load', inicio, false);

function inicio() {
    document.getElementById('guardar').addEventListener('click', guardar, false);
    document.getElementById('buscador').addEventListener('click', recuperar, false);
}

function guardar(evt) {
    localStorage.setItem(document.getElementById('buscar').value, document.getElementById('ingresar').value);        
    document.getElementById('buscar').value='';
    document.getElementById('ingresar').value='';
}

// Reservando una habitación

class habitacion{
    constructor(tipo,cantidad,precio,maximoPersonas){ // Agrergar el piso
        this.tipo =tipo;
        this.cantidad =cantidad;
        this.precio =precio;
        this.maximoPersonas =maximoPersonas;
        this.disponibilidad=true;
    }
    sumaIva(){
        this.precio = this.precio * 1.21;
    }
    vender(){
        if(this.cantidad<=0){
            this.disponibilidad=false;
            console.log("No quedan habitaciones de éste tipo.");
        }else {
            this.cantidad = this.cantidad -1; //this.cantidad -=1
        }
    }
}


// Evento Calcular cuota//

var llenarTabla = document.querySelector("#lista-tabla tbody");

function calcularCuota(monto, interes, tiempo){
    while(llenarTabla.firstChild){
        llenarTabla.removeChild(llenarTabla.firstChild);
    }
    let fechas = [];
    let fechaActual = Date.now();
    let mes_actual = moment(fechaActual);
    mes_actual.add(1,"month");

    let pagoInteres=0, pagoCapital =0, cuota=0;

    cuota = monto * (Math.pow(1+interes/100, tiempo)*interes/100)/(Math.pow(1+interes/100, tiempo)-1);
    console.log(cuota)

    for (let i=1; i<= tiempo; i++){
        pagoInteres = parseFloat(monto*(interes/100));
        pagoCapital = cuota - pagoInteres;
        monto = parseFloat(monto-pagoCapital);

        //Formato fechas
        fechas[i] = mes_actual.format("DD-MM-YYYY");
        mes_actual.add(1,"month");

        const row = document.createElement("tr");
        row.innerHTML=`
        <td>${fechas[i]}</td>
        <td>${cuota.toFixed(2)}</td>
        <td>${pagoCapital.toFixed(2)}</td>
        <td>${pagoInteres.toFixed(2)}</td>
        <td>${monto.toFixed(2)}</td>
        `;
        llenarTabla.appendChild(row)
    }
    console.log(cuota);
}

// ---------- DOM ----------
let titulo = document.getElementById("titulo")
console.log (titulo.innerText) // Prueba
titulo.innerText = "Hotel Cyan"
console.log (titulo.innerText) // Prueba

let respuesta;
let cantidadMAT = 0;
let cantidadTWIN = 0;
let cantidadTPL = 0;

// ---------- FUNCIONES ----------
const salones = [
    {nombre: "Salón Dalí", precio: 50000, capacidad: 50},
    {nombre: "Salón Picasso", precio: 80000, capacidad: 80},
]

const resultado = salones.find((tarifa) => tarifa.precio===50000)
const resultado2 = salones.filter((cantidad) => cantidad.capacidad>=60)
const resultado3 = salones.find((buscar) => buscar.nombre==="Salón Dalí")
const resultado4 = salones.filter((buscar) => buscar.nombre.includes("Salón Picasso"))
const resultado5 = salones.map((busqueda) => busqueda.nombre)

console.log("Resultado de la búsqueda: " + JSON.stringify(resultado))
console.log(resultado2)
console.log(resultado3)
console.log(resultado4)
console.log("Resultado de la búsqueda: " + resultado5)

//------------------- Desestructuración en Array

// omito la primera posición
const [, a] = salones

console.log(a) // "Salón Picasso"

//-------------------  spread ... del array
console.log(...salones) // "Salón Picasso"

// spread del array en un objeto
const salonesEnum = {
    ...salones
}

console.log(salonesEnum)
// { '0': 'Juan', '1': 'Julieta', '2': 'Carlos', '3': 'Mariela' }


// ------------------- Luxon -------------------

const DateTime = luxon.DateTime

const now = DateTime.now()
console.log( now.toString() )

const dt = DateTime.now();
dt.year    //=> 2022
dt.month   //=> 1
dt.day     //=> 25
dt.second  //=> 22
dt.weekday //=> 2

const dat = DateTime.now();
console.log( dat.zoneName ) // America/Buenos_Aires
console.log( dat.daysInMonth ) // 31