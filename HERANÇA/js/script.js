class Veiculo{
    constructor (modelo, marca){
        this.modelo = modelo
        this.marca = marca
        this.velocidade = 0
    }
    acelerar(){
        this.velocidade += 10
        console.log(`O ${this.marca} - ${this.modelo} acelerou e agora está a ${this.velocidade} km/h`)
    }
}

// A classe MOTO é filho/derivado de veiculo
class Moto extends Veiculo{
    constructor (modelo, marca, cilindrada){
        // * ja que ele é filho de VEICULO as informações que o mesmo controlam deixamos para ele (VEICULO)
        // ? Chamamos o metodo constructor de pai do veiculo com a palavra 'super'
        super(modelo, marca)
        this.cilindrada = cilindrada + "cc"
    }
    empinar(){
        console.log(`A moto ${this.marca} - ${this.modelo} está empinando`)
    }
}

class Carro extends Veiculo{
    constructor(modelo, marca, qtdPortas){
        super(modelo, marca)
        this.qtdPortas = qtdPortas
    }
    fazerBaliza(){
        console.log(`O carro ${this.marca} - ${this.modelo} está fazendo baliza`)
    }
}

// Utilizando as CLASSES  criando objetos com herança 

let moto1 = new Moto ("Fan", "Honda", 150)
let moto2 = new Moto ("CBR", "Honda", 300)

let carro1 = new Carro ("Marea", "Fiat", 4)
let carro2 = new Carro ("Monza", "Chevrolet", 4)

// Usando um metodo que ambos tem em comum pelo Veiculo
moto1.acelerar()
moto1.acelerar()
moto1.acelerar()

carro2.acelerar()
carro2.acelerar()
carro2.acelerar()
carro2.acelerar()
carro2.acelerar()

// ?  Usando metodos especificos das classes filhas

moto2.empinar()

carro1.fazerBaliza()

// ? Dará erro : carro2.empinar()
// ! Pois o carro nao possui metodo/função de empinar