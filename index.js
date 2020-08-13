class Vehiculo{
    constructor(marca,modelo,precio){
    this.marca= marca;
    this.modelo=modelo;
    this.precio=precio; 
} 
    
}
class Auto extends Vehiculo{
    constructor(marca,modelo,puertas, precio){
        super(marca,modelo,precio)
        this.puertas=puertas
        this.mostrarinfo= function(){
            return "Marca: " + this.marca + "// Modelo: " + this.modelo + "// Puertas: " + this.puertas + "// Precio: " + this.precio

        }
    }

}

class Moto extends Vehiculo{
    constructor(marca,modelo,cilindrada,precio){
        super(marca,modelo,precio)
        this.cilindrada=cilindrada
        this.mostrarinfo=function(){
            return "Marca: " + this.marca + "// Modelo: " + this.modelo + "// Cilindrada: " + this.cilindrada + "// Precio: " + this.precio    
        }
    }
}
let agregor=[]
function agrego(objeto,agrego){
    agrego.push(objeto)
    return agrego
}
let auto1=new Auto("Peugeot",'206','4','$200.000,00')
let moto1=new Moto('Honda','Titan','125c','$60.000,00')
let auto2=new Auto("Peugeot",'208','5','$250.000,00')
let moto2=new Moto('Yamaha','YBR','160c','$80.500,50')
agrego(auto1,agregor)
agrego(auto2,agregor)
agrego(moto1,agregor)
agrego(moto2,agregor)
console.log(auto1.mostrarinfo())
console.log(moto1.mostrarinfo())
console.log(auto2.mostrarinfo())
console.log(moto2.mostrarinfo())

function mostrarParte2(lista){
  var uno = "Vehiculo mas caro :"+ lista[0].marca +" "+ lista[0].modelo  
  var dos= "Vehiculo mas barato :" + lista[2].marca + " " + lista[2].modelo
  var tres= "Vehículo que contiene en el modelo la letra ‘Y’: " + lista[3].marca +" " + lista[3].modelo + " "+ lista[3].precio
  return uno +"\n" + dos + "\n" + tres
 
}
function parteCUATRO(lista){
  var cero= "Vehículos ordenados por precio de mayor a menor:"
  var uno= agregor[1].marca +" " + agregor[1].modelo
  var dos= agregor[0].marca +" " + agregor[0].modelo
  var tres= agregor[3].marca +" " + agregor[3].modelo
  var cuatro= agregor[2].marca +" " + agregor[2].modelo 
  return  cero +"\n" + uno +"\n" + dos + "\n" + tres + "\n" + cuatro
}
console.log(mostrarParte2(agregor))
console.log(parteCUATRO(agregor))

