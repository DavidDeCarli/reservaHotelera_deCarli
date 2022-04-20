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
habitacionTpl.vender();
habitacionTpl.vender();
habitacionTpl.vender();
habitacionTpl.vender();
habitacionTpl.vender();
habitacionTpl.vender();

// ---------- TWIN ----------
if(habitacionTwin.cantidad<=0){
    document.write("No hay disponibilidad de habitaciones " + habitacionTwin.tipo + ".");
}else {
    document.write("Disponibilidad de habitación "+ habitacionTwin.tipo + " " + habitacionTwin.cantidad + " con una tarifa de $" + habitacionTwin.precio + " finales, hasta un máximo de " + habitacionTwin.maximoPersonas + " personas. Incluye el desayuno.<br>")
}

// ---------- MAT ----------
if(habitacionMat.cantidad<=0){
    document.write("No hay disponibilidad de habitaciones " + habitacionMat.tipo + ".");
}else {
    document.write("Disponibilidad de habitación "+ habitacionMat.tipo + " " + habitacionMat.cantidad + " con una tarifa de $" + habitacionMat.precio + " finales, hasta un máximo de " + habitacionMat.maximoPersonas + " personas. Incluye el desayuno.<br>")
}

// ---------- TPL ----------
if(habitacionTpl.cantidad<=0){
    document.write("No hay disponibilidad de habitaciones " + habitacionTpl.tipo + ".");
}else {
    document.write("Disponibilidad de habitación "+ habitacionTpl.tipo + " " + habitacionTpl.cantidad + " con una tarifa de $" + habitacionTpl.precio + " finales, hasta un máximo de " + habitacionTpl.maximoPersonas + " personas. Incluye el desayuno.<br>")
}