// Habitaciones por piso

const habitacionsPorPiso = [10,10,10,10,10,10,10,10,10,5]
document.write(`
<div>
    <img src="images/CyanAmericasTowersHotel.png" alt="Entrada del hotel Cyan Américas Towers">
</div>
`)

let habitacionesTotales = habitacionsPorPiso[0]+ habitacionsPorPiso[1] + habitacionsPorPiso[2] + habitacionsPorPiso[3] + habitacionsPorPiso[4] + habitacionsPorPiso[5] + habitacionsPorPiso[6] + habitacionsPorPiso[7] + habitacionsPorPiso[8] + habitacionsPorPiso[9];

if(habitacionesTotales<=0){
    document.write("No hay disponibilidad de habitaciones en el hotel.");
}else {
    document.write("Total de habitaciones en el hotel: " + habitacionesTotales + "<br>" + 
    "Disponibilidad de habitaciones en el 1er piso: "+ habitacionsPorPiso[0] + "<br>" + 
    "Disponibilidad de habitaciones en el 2do piso: "+ habitacionsPorPiso[1] + "<br>" + 
    "Disponibilidad de habitaciones en el 3er piso: "+ habitacionsPorPiso[2] + "<br>" + 
    "Disponibilidad de habitaciones en el 4to piso: "+ habitacionsPorPiso[3] + "<br>" + 
    "Disponibilidad de habitaciones en el 5to piso: "+ habitacionsPorPiso[4] + "<br>" + 
    "Disponibilidad de habitaciones en el 6to piso: "+ habitacionsPorPiso[5] + "<br>" + 
    "Disponibilidad de habitaciones en el 7to piso: "+ habitacionsPorPiso[6] + "<br>" + 
    "Disponibilidad de habitaciones en el 8vo piso: "+ habitacionsPorPiso[7] + "<br>" + 
    "Disponibilidad de habitaciones en el 9no piso: "+ habitacionsPorPiso[8] + "<br>" + 
    "Disponibilidad de habitaciones en el 10mo piso: "+ habitacionsPorPiso[9] + "<br>"
    )
}

function descontarDelPrimerPiso(){
    if(habitacionsPorPiso[0]<=0){
        console.log("No quedan habitaciones en éste piso.");
    }else {
        habitacionsPorPiso[0] = habitacionsPorPiso[0] -1;
    }
}

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

// ---------- Venta de habitaciones ----------
habitacionTpl.vender() && habitacionsPorPiso[0].descontarDelPrimerPiso();
habitacionTpl.vender() && habitacionsPorPiso[0].descontarDelPrimerPiso();
habitacionTpl.vender() && habitacionsPorPiso[0].descontarDelPrimerPiso();
habitacionTpl.vender() && habitacionsPorPiso[0].descontarDelPrimerPiso();
habitacionTpl.vender() && habitacionsPorPiso[0].descontarDelPrimerPiso();
habitacionTpl.vender() && habitacionsPorPiso[0].descontarDelPrimerPiso();

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