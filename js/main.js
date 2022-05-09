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

const habitacionTwin = new habitacion("TWIN",50,6200,2)
console.dir(habitacionTwin)

const habitacionMat = new habitacion("MAT",40,6500,2)
console.dir(habitacionMat)

const habitacionTpl = new habitacion("TPL",5,7500,3)
console.dir(habitacionTpl)

// ---------- suma del IVA ----------
habitacionTwin.sumaIva();
habitacionMat.sumaIva();
habitacionTpl.sumaIva();

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
    } // no sé porque no me funciona, me podrás ayudar con ésto?
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
        llenarTabla.appendChild(row) // no sé porque no me funciona, me podrás ayudar con ésto?
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

do{
    respuesta = prompt("Que tipo de habitación busca? MAT, TWIN o TPL");
    if(respuesta == "MAT"){
        cantidadMAT++;
        if(habitacionMat.cantidad<=0){
            alert("No hay disponibilidad de habitaciones " + habitacionMat.tipo + ".");
        }else {
            habitacionMat.vender();
        }
        respuesta = confirm("Quiere reservar otra habitación?")
    }else if(respuesta == "TWIN"){
        cantidadTWIN++;
        if(habitacionTwin.cantidad<=0){
            alert("No hay disponibilidad de habitaciones " + habitacionTwin.tipo + ".");
        }else {
            habitacionTwin.vender();
        }
        respuesta = confirm("Quiere reservar otra habitación?")
    }else if(respuesta == "TPL"){
        cantidadTPL++;
        if(habitacionTpl.cantidad<=0){
            alert("No hay disponibilidad de habitaciones " + habitacionTpl.tipo + ".");
        }else {
            habitacionTpl.vender();
        }
        respuesta = confirm("Quiere reservar otra habitación?")
    }else if((respuesta !== "MAT" || "TWIN" || "TPL" ) && (respuesta !== null)){
        (alert("Favor de ingresar 'MAT', 'TWIN' o 'TPL' o selecione la opción de 'Cancelar' para salir."))
    }
}while(respuesta); 

alert(`Usted reservó ${cantidadMAT} habitaciones Mat.`)
alert(`Usted reservó ${cantidadTWIN} habitaciones Twin.`)
alert(`Usted reservó ${cantidadTPL} habitaciones Tpl.`)
alert("El importe total a abonar es de $" + ((cantidadMAT * habitacionMat.precio) + (cantidadTWIN * habitacionTwin.precio) + (cantidadTPL * habitacionTpl.precio) + " finales con iva incluido."))

// Habitaciones por piso
const habitacionesPorPiso = [10,10,10,10,10,10,10,10,10,5]
habitacionesPorPiso.forEach((habitaciones) => {
    console.log("Total de habitaciones: " + habitaciones)
})

document.write(`
<div>
    <img src="images/CyanAmericasTowersHotel.png" alt="Entrada del hotel Cyan Américas Towers">
</div>
`)

let habitacionesTotales = habitacionesPorPiso[0]+ habitacionesPorPiso[1] + habitacionesPorPiso[2] + habitacionesPorPiso[3] + habitacionesPorPiso[4] + habitacionesPorPiso[5] + habitacionesPorPiso[6] + habitacionesPorPiso[7] + habitacionesPorPiso[8] + habitacionesPorPiso[9];

function calcularPorcentaje() {
    return habitacionesTotales / habitacionesTotales * 100;
}

if(habitacionesTotales<=0){
    document.write("No hay disponibilidad de habitaciones en el hotel.");
}else {
    document.write("Total de habitaciones disponibles en el hotel: " + habitacionesTotales + " (" + calcularPorcentaje() + "% de disponibilidad)<br>" + 
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

// ---------- TWIN ----------
if(habitacionTwin.cantidad<=0){
    document.write("No hay disponibilidad de habitaciones " + habitacionTwin.tipo + ".");
}else {
    document.write("Disponibilidad de habitación "+ habitacionTwin.tipo + " " + habitacionTwin.cantidad + " con una tarifa de $" + habitacionTwin.precio + " finales, hasta un máximo de " + habitacionTwin.maximoPersonas + " personas. Incluye el desayuno.<br>")
}
document.write(`
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
if(habitacionMat.cantidad<=0){
    document.write("No hay disponibilidad de habitaciones " + habitacionMat.tipo + ".");
}else {
    document.write("Disponibilidad de habitación "+ habitacionMat.tipo + " " + habitacionMat.cantidad + " con una tarifa de $" + habitacionMat.precio + " finales, hasta un máximo de " + habitacionMat.maximoPersonas + " personas. Incluye el desayuno.<br>")
}
document.write(`
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
if(habitacionTpl.cantidad<=0){
    document.write("No hay disponibilidad de habitaciones " + habitacionTpl.tipo + ".");
}else {
    document.write("Disponibilidad de habitación "+ habitacionTpl.tipo + " " + habitacionTpl.cantidad + " con una tarifa de $" + habitacionTpl.precio + " finales, hasta un máximo de " + habitacionTpl.maximoPersonas + " personas. Incluye el desayuno.<br>")
}
document.write(`
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

// ---------- FUNCIONES ----------
const salones = [
    {nombre: "Salón Dalí", precio: 50000, capacidad: 50},
    {nombre: "Salón Picasso", precio: 80000, capacidad: 80},
]

const resultado = salones.find((tarifa) => tarifa.precio===50000)
const resultado2 = salones.find((tarifa) => tarifa.precio===65000)
const resultado3 = salones.filter((cantidad) => cantidad.capacidad>=60)
const resultado4 = salones.find((buscar) => buscar.nombre==="Salón Dalí")
const resultado5 = salones.filter((buscar) => buscar.nombre.includes("Salón Picasso"))
const resultado6 = salones.map((busqueda) => busqueda.nombre)

console.log(resultado) // me devuelven object object porque?
console.log("Resultado de la búsqueda de la tarifa en salones: " + resultado2) 
console.log("Resultado de la búsqueda de la tarifa en salones: " + resultado3) // me devuelven object object porque?
console.log("Resultado de la búsqueda: " + resultado4) // me devuelven object object porque?
console.log(resultado5) // no me devuelve nada porque?
console.log("Resultado de la búsqueda: " + resultado6)

// ---------- SALONES ----------

document.write(`
    <div>
        <h2>Salones</h2>
        <h3>Salon Dalí</h3>
        <img src="images/salon_dali.png" alt="Salón Dalí">
        <div>
            <h4>Información del salón</h4>
            <ul>
                <li>Capacidad 50 personas</li>
                <li>150 m2</li>
            </ul>
            <h5>Servicios adicionales</h5>
            <ul>
                <li>Aire Acondicionado</li>
                <li>Reflector</li>
                <li>Microfono</li>
                <li>Sillas</li>
                <li>Mesas</li>
                <li>Podio</li>
                <li>Teléfono</li>
                <li>Bar</li>
                <li>Meseros</li>
                <li>Wi-Fi</li>
            </ul>
            <a href="https://reservations.cyanhoteles.com.ar/106758?adults=2&children=0&currency=ARS&datein=05/13/2022&gdp=hotelfinder&hotelID=106758&languageid=2&nights=2&rateplanID=2914198&roomtypeID=444164&subchan=GOOGLE_AR_desktop_CPA&utm_campaign=ds_9090959734&utm_content=HPA_106758_localuniversal_2_AR_desktop_2022-05-13_default_9090959734__standard&utm_medium=meta&utm_source=googleha#/accommodation/room" class="btn btn-primary">Reservar</a>
        </div>
        <h3>Salon Picasso</h3>
        <img src="images/salon_picasso.png" alt="Salón Picasso">
        <div>
            <h4>Información del salón</h4>
            <ul>
                <li>Capacidad 80 personas</li>
                <li>200 m2</li>
            </ul>
            <h5>Servicios adicionales</h5>
            <ul>
                <li>Aire Acondicionado</li>
                <li>Reflector</li>
                <li>Microfono</li>
                <li>Sillas</li>
                <li>Mesas</li>
                <li>Podio</li>
                <li>Teléfono</li>
                <li>Bar</li>
                <li>Meseros</li>
                <li>Wi-Fi</li>
            </ul>
            <a href="https://reservations.cyanhoteles.com.ar/106758?adults=2&children=0&currency=ARS&datein=05/13/2022&gdp=hotelfinder&hotelID=106758&languageid=2&nights=2&rateplanID=2914198&roomtypeID=444164&subchan=GOOGLE_AR_desktop_CPA&utm_campaign=ds_9090959734&utm_content=HPA_106758_localuniversal_2_AR_desktop_2022-05-13_default_9090959734__standard&utm_medium=meta&utm_source=googleha#/accommodation/room" class="btn btn-primary">Reservar</a>
        </div>
    </div>
`)

// ---------- ESPACIOS COMUNES ----------
document.write(`
    <div>
        <h2>Espacios comunes</h2>
        <h3>Piscina</h3>
        <img src="images/pileta.png" alt="Pileta">
        <div>
            <h5>Servicios adicionales</h5>
            <ul>
                <li>Teléfono</li>
                <li>Bar</li>
                <li>Meseros</li>
                <li>Wi-Fi</li>
                <li>Duchas</li>
            </ul>
        </div>
        <h3>Gimnasio</h3>
        <img src="images/gimnasio.png" alt="Gimnasio">
        <div>
            <h5>Servicios adicionales</h5>
            <ul>
            <li>Aire Acondicionado</li>
            <li>Teléfono</li>
            <li>Wi-Fi</li>
            <li>Duchas</li>
            <li>Televisión</li>
            </ul>
        </div>
    </div>
`)