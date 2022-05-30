// promesa y libreria

var habitaciones;

(async() => {
    const {value: pais} = await Swal.fire({
        title: "Bienvenido!",
        text: "Selecciona tu nacionalidad: ",
        icon: "Success", // "error", "warning", "info", "question"
        confirmButtonText: "Seleccionar",
        footer: '<span class="rojo">Selecciona tu nacionalidad para poder continuar!',
        width: "80%",
        padding: "1rem",
        grow: "row", // "fullscreen", "column"
        backdrop: true,
        toast: false,
        position: "center",
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false,
        stopKeydownPropagation: false,
        input: "select",
        inputPlaceholder: "País",
        inputValue: "",
        inputOptions: {
            argentina: "Argentina",
            mexico: "México",
            españa: "España",
            peru: "Perú",
            uruguay: "Uruguay",
            brasil: "Brasil",
            bolivia: "Bolivia"
        },
        showConfirmButton: true,
        confirmButtonColor: "#3E60E9",
        confirmButtonAriaLabel: "Confirmar",

        showCancelButton: false,
        cancelButtonText: "Cancelar",
        cancelButtonColor: "",
        cancelButtonAriaLabel: "Cancelar",

        buttonsStyling: true,
        showCloseButton: true,
        cloaseButtonAriaLabel: "Cerrar Alerta",

        imageUrl: "images/cyan_logo.png",
        imageWidth: "120px",
        imageAlt: "Logo de Hoteles Cyan"
    });
    if(pais){
        Swal.fire({
            title: `Seleccionaste ${pais}`
        });
    }
} )()

// publicidad

// Swal.fire({
//     title: "reserva tu Hotel",
//     html: "<a href='index.html' class='boton'>Reservar ahora</a>",
//     icon: undefined,
//     footer: "Anuncio",
//     width: "300px",
//     padding: "1rem",
//     background: "#fff",
//     grow: false,
//     backdrop: false,
//     timer: 20000,
//     timerProgressBar: true,
//     toast: false,
//     position: "bottom-end",
//     allowOutsideClick: false,
//     allowEscapeKey: false,
//     stopKeydownPropagation: false,
//     showConfirmButton: false,
//     showCancelButton: true,
//     cloaseButtonAriaLabel: "Cerrar anuncio",
//     imageUrl: "images/hotelCyan.png",
//     imageWidth: "100%",
//     imageAlt: "Vista de la entrada del hotel"
// });

// Terminos y condiciones

// Swal.fire({
//     html: "Por favor acepte nuestros <a href='#' class='boton'>Términos y condiciones</a>",
//     confirmButtonText: "Acepto",
//     icon: "info",
//     padding: "1rem",
//     backdrop: true,
//     toast: true,
//     position: "bottom",
//     allowOutsideClick: false,
//     allowEscapeKey: false,
//     stopKeydownPropagation: false,
//     showConfirmButton: true,
//     showCancelButton: false,
//     cloaseButtonAriaLabel: "Cerrar ésta alerta",
//     customClass:{
//          content: "contentClass"
//     }
// });

// Operador Ternario
document.getElementById("guardar").addEventListener("click",()=>{
    let miEdad = document.getElementById("edad").value;
    let nombre = document.getElementById("nombre").value;
    var tipo_habitaciones = document.getElementById("tipo_habitacion").value;
    console.log(tipo_habitaciones)
    let disponibilidad = 0;
    let precio = 0;
    let cantidad_personas = 0;
    let mayorEdad = (miEdad >= 18) ? alert("Sos mayor de edad, podes reservar sin problemas") : (alert("No eres mayor de edad no puedes hacer una reserva") && window.stop());
    function saludar(){
        if ((nombre == null) || (nombre != confirm))
        document.getElementById("bienvenida").innerHTML ="Bienvenido/a";
        else(nombre !=null)
        document.getElementById("bienvenida").innerHTML ="Bienvenido/a " + nombre;
    }

    saludar();
    switch(tipo_habitaciones){
        case "TWIN" : precio = 6200; disponibilidad = 50; cantidad_personas=2; break;
        case "MAT" : precio = 6500; disponibilidad = 40; cantidad_personas=2; break;
        case "TPL" : precio = 7500; disponibilidad = 5; cantidad_personas=3; break;
    }
habitaciones = new habitacion(tipo_habitaciones,disponibilidad,precio,cantidad_personas)
console.dir(habitaciones)

do{
    respuesta = prompt("Que tipo de habitación busca? MAT, TWIN o TPL");
    if(respuesta == "MAT"){
        cantidadMAT++;
        if(habitaciones.cantidad<=0){
            alert("No hay disponibilidad de habitaciones " + habitaciones.tipo + ".");
        }else {
            habitaciones.vender();
        }
        respuesta = confirm("Quiere reservar otra habitación?")
    }else if(respuesta == "TWIN"){
        cantidadTWIN++;
        if(habitaciones.cantidad<=0){
            alert("No hay disponibilidad de habitaciones " + habitaciones.tipo + ".");
        }else {
            habitaciones.vender();
        }
        respuesta = confirm("Quiere reservar otra habitación?")
    }else if(respuesta == "TPL"){
        cantidadTPL++;
        if(habitaciones.cantidad<=0){
            alert("No hay disponibilidad de habitaciones " + habitaciones.tipo + ".");
        }else {
            habitaciones.vender();
        }
        respuesta = confirm("Quiere reservar otra habitación?")
    }else if((respuesta !== "MAT" || "TWIN" || "TPL" ) && (respuesta !== null)){
        (alert("Favor de ingresar 'MAT', 'TWIN' o 'TPL' o selecione la opción de 'Cancelar' para salir."))
    }
}while(respuesta); 

alert(`Usted reservó ${cantidadMAT} habitaciones Mat.`)
alert(`Usted reservó ${cantidadTWIN} habitaciones Twin.`)
alert(`Usted reservó ${cantidadTPL} habitaciones Tpl.`)
alert("El importe total a abonar es de $" + ((cantidadMAT * habitaciones.precio) + (cantidadTWIN * habitaciones.precio) + (cantidadTPL * habitaciones.precio) + " finales con iva incluido."))

// ---------- TWIN ----------
let divTwin = document.getElementById("twin") 

if(habitaciones.cantidad<=0){
    divTwin.innerHTML=("No hay disponibilidad de habitaciones " + habitaciones.tipo + ".");
}else {
    divTwin.innerHTML=("Disponibilidad de habitación "+ habitaciones.tipo + " " + habitaciones.cantidad + " con una tarifa de $" + habitaciones.precio + " finales, hasta un máximo de " + habitaciones.maximoPersonas + " personas. Incluye el desayuno.<br>")
}
divTwin.innerHTML=(`
    <div>
        <img src="images/twin.jpg" alt="Habitación Twin">
        <div>
            <h4>Habitación TWIN</h4>
            <h5>Información de la habitación</h5>
            <ul>
                <li>2 personas</li>
                <li>2 Camas individuales</li>
                <li>30 m2 / 323 ft2</li>
            </ul>
            <h5>Servicios de la habitación</h5>
            <ul>
                <li>Aire Acondicionado</li>
                <li>Bañera</li>
                <li>Escritorio</li>
                <li>Secador de Pelo</li>
                <li>Ducha</li>
                <li>Teléfono</li>
                <li>Televisión</li>
                <li>Wi-Fi</li>
            </ul>
            <a href="https://reservations.cyanhoteles.com.ar/106758?adults=2&children=0&currency=ARS&datein=05/13/2022&gdp=hotelfinder&hotelID=106758&languageid=2&nights=2&rateplanID=2914198&roomtypeID=444164&subchan=GOOGLE_AR_desktop_CPA&utm_campaign=ds_9090959734&utm_content=HPA_106758_localuniversal_2_AR_desktop_2022-05-13_default_9090959734__standard&utm_medium=meta&utm_source=googleha#/accommodation/room" class="btn btn-primary">Reservar</a>
        </div>
    </div>
`)

// ---------- MAT ----------

let divMat = document.getElementById("mat") 

if(habitaciones.cantidad<=0){
    divMat.innerHTML=("No hay disponibilidad de habitaciones " + habitaciones.tipo + ".");
}else {
    divMat.innerHTML=("Disponibilidad de habitación "+ habitaciones.tipo + " " + habitaciones.cantidad + " con una tarifa de $" + habitaciones.precio + " finales, hasta un máximo de " + habitaciones.maximoPersonas + " personas. Incluye el desayuno.<br>")
}
divMat.innerHTML=(`
    <div>
        <img src="images/mat.jpg" alt="Habitación matrimonial">
        <div>
            <h4>Habitación MAT</h4>
            <h5>Información de la habitación</h5>
            <ul>
                <li>2 personas</li>
                <li>1 Cama matrimonial</li>
                <li>30 m2 / 323 ft2</li>
            </ul>
            <h5>Servicios de la habitación</h5>
            <ul>
                <li>Aire Acondicionado</li>
                <li>Bañera</li>
                <li>Escritorio</li>
                <li>Secador de Pelo</li>
                <li>Ducha</li>
                <li>Teléfono</li>
                <li>Televisión</li>
                <li>Wi-Fi</li>
            </ul>
            <a href="https://reservations.cyanhoteles.com.ar/106758?adults=2&children=0&currency=ARS&datein=05/13/2022&gdp=hotelfinder&hotelID=106758&languageid=2&nights=2&rateplanID=2914198&roomtypeID=444164&subchan=GOOGLE_AR_desktop_CPA&utm_campaign=ds_9090959734&utm_content=HPA_106758_localuniversal_2_AR_desktop_2022-05-13_default_9090959734__standard&utm_medium=meta&utm_source=googleha#/accommodation/room" class="btn btn-primary">Reservar</a>
        </div>
    </div>
`)

// ---------- TPL ----------

let divTpl = document.getElementById("tpl") 

if(habitaciones.cantidad<=0){
    divTpl.innerHTML=("No hay disponibilidad de habitaciones " + habitaciones.tipo + ".");
}else {
    divTpl.innerHTML=("Disponibilidad de habitación "+ habitaciones.tipo + " " + habitaciones.cantidad + " con una tarifa de $" + habitaciones.precio + " finales, hasta un máximo de " + habitaciones.maximoPersonas + " personas. Incluye el desayuno.<br>")
}
divTpl.innerHTML=(`
    <div>
        <img src="images/mat.jpg" alt="Habitación matrimonial">
        <div>
            <h4>Habitación TPL</h4>
            <h5>Información de la habitación</h5>
            <ul>
                <li>3 personas</li>
                <li>1 Cama matrimonial o 2 camas individuales + 1 cama individual</li>
                <li>30 m2 / 323 ft2</li>
            </ul>
            <h5>Servicios de la habitación</h5>
            <ul>
                <li>Aire Acondicionado</li>
                <li>Bañera</li>
                <li>Escritorio</li>
                <li>Secador de Pelo</li>
                <li>Ducha</li>
                <li>Teléfono</li>
                <li>Televisión</li>
                <li>Wi-Fi</li>
            </ul>
            <a href="https://reservations.cyanhoteles.com.ar/106758?adults=2&children=0&currency=ARS&datein=05/13/2022&gdp=hotelfinder&hotelID=106758&languageid=2&nights=2&rateplanID=2914198&roomtypeID=444164&subchan=GOOGLE_AR_desktop_CPA&utm_campaign=ds_9090959734&utm_content=HPA_106758_localuniversal_2_AR_desktop_2022-05-13_default_9090959734__standard&utm_medium=meta&utm_source=googleha#/accommodation/room" class="btn btn-primary">Reservar</a>
        </div>
    </div>
`)

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

function recuperar(evt) {
    if (localStorage.getItem(document.getElementById('buscar').value) == null) 
        alert('No está almacenala la palabra '+document.getElementById('buscar').value);
    else  
        document.getElementById('ingresar').value=localStorage.getItem(document.getElementById('buscar').value);
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


// Evento //

const monto = document.getElementById("monto");
const tiempo = document.getElementById("tiempo");
const interes = document.getElementById("interes");
const btnCalcular = document.getElementById("btnCalcular");
const llenarTabla = document.querySelector("#lista-tabla tbody");

btnCalcular.addEventListener("click", () => {
    calcularCuota(monto.value, interes.value, tiempo.value);
})

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

// Habitaciones por piso
const habitacionesPorPiso = [10,10,10,10,10,10,10,10,10,5]
habitacionesPorPiso.forEach((habitaciones) => {
    console.log("Total de habitaciones: " + habitaciones)
})

let habitacionesTotales = habitacionesPorPiso[0]+ habitacionesPorPiso[1] + habitacionesPorPiso[2] + habitacionesPorPiso[3] + habitacionesPorPiso[4] + habitacionesPorPiso[5] + habitacionesPorPiso[6] + habitacionesPorPiso[7] + habitacionesPorPiso[8] + habitacionesPorPiso[9];

function calcularPorcentaje() {
    return habitacionesTotales / habitacionesTotales * 100; //corregir
}

let disponibilidadEnGeneral = document.getElementById("disponibilidadGeneral") 

if(habitacionesTotales<=0){
    disponibilidadEnGeneral.innerHTML=("No hay disponibilidad de habitaciones en el hotel.");
}else {
    disponibilidadEnGeneral.innerHTML=("Total de habitaciones disponibles en el hotel: " + habitacionesTotales + " (" + calcularPorcentaje() + "% de disponibilidad)<br>" + 
    "Disponibilidad de habitaciones en el 1er piso: "+ habitacionesPorPiso[0] + "<br>" + 
    "Disponibilidad de habitaciones en el 2do piso: "+ habitacionesPorPiso[1] + "<br>" + 
    "Disponibilidad de habitaciones en el 3er piso: "+ habitacionesPorPiso[2] + "<br>" + 
    "Disponibilidad de habitaciones en el 4to piso: "+ habitacionesPorPiso[3] + "<br>" + 
    "Disponibilidad de habitaciones en el 5to piso: "+ habitacionesPorPiso[4] + "<br>" + 
    "Disponibilidad de habitaciones en el 6to piso: "+ habitacionesPorPiso[5] + "<br>" + 
    "Disponibilidad de habitaciones en el 7to piso: "+ habitacionesPorPiso[6] + "<br>" + 
    "Disponibilidad de habitaciones en el 8vo piso: "+ habitacionesPorPiso[7] + "<br>" + 
    "Disponibilidad de habitaciones en el 9no piso: "+ habitacionesPorPiso[8] + "<br>" + 
    "Disponibilidad de habitaciones en el 10mo piso: "+ habitacionesPorPiso[9] + "<br>"
    )
}

function descontarDelPrimerPiso(){
    if(habitacionesPorPiso[0]<=0){
        console.log("No quedan habitaciones en éste piso.");
    }else {
        habitacionesPorPiso[0] = habitacionesPorPiso[0] -1;
    }
}

// ---------- Venta de habitaciones ---------- (PRUEBA)
// habitacionTpl.vender() && habitacionesPorPiso[0].descontarDelPrimerPiso();

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

console.log("Resultado de la búsqueda: " + JSON.stringify(resultado)) //se convirtio un objeto en string para agregarlo a la cadena
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