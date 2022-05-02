// Reservando una habitación

class habitacion{
    constructor(tipo,cantidad,precio,maximoPersonas){
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

let consulta;
let respuesta;
let cantidadMAT = 0;
let cantidadTWIN = 0;
let cantidadTPL = 0;

do{
    consulta = prompt("Que tipo de habitación busca? MAT, TWIN o TPL");
    if(consulta == "MAT"){
        cantidadMAT++;
        if(habitacionMat.cantidad<=0){
            alert("No hay disponibilidad de habitaciones " + habitacionMat.tipo + ".");
        }else {
            habitacionMat.vender();
        }
        respuesta = confirm("Quiere reservar otra habitación?")
    }else if(consulta == "TWIN"){
        cantidadTWIN++;
        if(habitacionTwin.cantidad<=0){
            alert("No hay disponibilidad de habitaciones " + habitacionTwin.tipo + ".");
        }else {
            habitacionTwin.vender();
        }
        respuesta = confirm("Quiere reservar otra habitación?")
    }else if(consulta == "TPL"){
        cantidadTPL++;
        if(habitacionTpl.cantidad<=0){
            alert("No hay disponibilidad de habitaciones " + habitacionTpl.tipo + ".");
        }else {
            habitacionTpl.vender();
        }
        respuesta = confirm("Quiere reservar otra habitación?")
    }else if(consulta != "MAT" || "TWIN" || "TPL"){
        (alert("Favor de ingresar 'MAT', 'TWIN' o 'TPL' o selecione la opción de 'Cancelar' para salir."))
    }else(consulta !=confirm)
}while(respuesta); 

alert(`Usted reservó ${cantidadMAT} habitaciones Mat.`)
alert(`Usted reservó ${cantidadTWIN} habitaciones Twin.`)
alert(`Usted reservó ${cantidadTPL} habitaciones Tpl.`)
alert("El importe total a abonar es de " + ((cantidadMAT * habitacionMat.sumaIva()) + (cantidadTWIN * habitacionTwin.sumaIva()) + (cantidadTPL * habitacionTpl.sumaIva()) + " finales con iva incluido."))

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

const resultado = habitacionTwin.find((tarifa) => tarifa.precio===6200)
const resultado2 = habitacionMat.find((tarifa) => tarifa.precio===6500)
const resultado3 = habitacionTpl.filter((tarifa) => tarifa.precio<=6800)

console.log("Resultado de la búsqueda de la tarifa en habitación Twin: " + resultado)
console.log("Resultado de la búsqueda de la tarifa en habitación Mat: " + resultado2)
console.log("Resultado de la búsqueda de la tarifa en habitación Tpl: " + resultado3)

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