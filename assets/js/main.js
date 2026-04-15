//Ejercicio 2
class Alumno {
    constructor(nombre,nota){
        this.nombre=nombre;
        this.nota=nota;
    }

    mostrarNota(){
        console.log(`Tu nota es: ${this.nota}`);
    }

}
//Fin ejercicio 2

//Ejercicio 3
class Persona{
    constructor(nombre){
        this.nombre=nombre;
    }

    saludar(){
        console.log(`${this.nombre} te esta saludando...`);
    }
}

class Profesor extends Persona{
    constructor(nombre){
        super(nombre);
        this.nombre=nombre;
        

    }
    enseñar(){
        console.log(`${this.nombre} te esta enseñando, atiende...`);
    }

}

let oscar = new Profesor("Oscar");
oscar.saludar();
//Fin ejercicio 3

//Ejercicio 4
class CuentaBancaria{
    
    #saldo;
    
    constructor(saldo){
    this.#saldo=saldo;
    }

    pagar(cantidad){
        if(this.#saldo<0){
            console.log("No se puede pagar");
        }
        this.#saldo -=cantidad;
    }

    ingresar(cantidad){
        if(this.#saldo>cantidad){
            return console.log("No puedes introducir mas dinero del que tengo en la cuenta");
        }
        this.#saldo +=cantidad;
    }

    verSaldo(){
        
        console.log(`Tu saldo es: ${this.#saldo}€`);
    }
}

 visa = new CuentaBancaria(2000);
 visa.pagar(300);
 visa.ingresar(1800);
 visa.verSaldo();
//Fin ejercicio 4

//Ejercicio 5 Polimorfismo y Diseño
class SistemaPago{
    constructor(nombre){
        this.nombre=nombre;
    }
    pago(){
        console.log("Estas pagando...");
    }
}

class Tarjeta extends SistemaPago{
    constructor(nombre){
        super(nombre);
        this.nombre=nombre;
    }

    pago(){
        console.log("Estas pagando con tarjeta");
    }
}

class PayPal extends SistemaPago{
    constructor(nombre){
        super(nombre);
        this.nombre = nombre;
    }
    pago(){
        console.log("Estas pagando con PayPal");
    }
}
//Fin ejercicio 5


// El reto final · Programación Orientada a Objetos
// Reto integrador (nivel intermedio–avanzado)
// Contexto del reto
// Estás diseñando el núcleo de un videojuego educativo. El juego tiene personajes, enemigos y un sistema de combate sencillo.
// El objetivo del reto es demostrar que entiendes la POO, no solo que sabes escribir class.

class Personaje{
    #vida = 200;
    constructor(nombre,vida){
        this.nombre=nombre;
        this.#vida=vida;
    }

    atacar(){
        console.log(`el heroe: ${this.nombre} esta atacando...`);
    }

    recibirDaño(cantidad){
        if(this.#vida <=0){
            console.log("Has muerto...");
            return;
        }
        this.#vida -=cantidad;
        console.log(`Has recibido: ${cantidad} de daño, tu vida restante es: ${this.vida}`);
    }

    estaVivo(){
        if(this.#vida>0){
            return true;
        }else{
            return false;
        }
    }
}

class Guerrero extends Personaje{
    constructor(nombre,vida,ataque){
        super(nombre,vida);
        this.nombre=nombre;
        this.vida=vida;
        this.ataque=ataque;
    }

    atacar(){
        console.log("Esta atacando el guerrero");
    }
    ataqueEspecial(ataque){
        console.log(`El guerrero te esta atacando y te hace: ${ataque} de daño especial...`);
    }
}

class Mago extends Personaje{
    constructor(nombre,vida,mana){
        super(nombre,vida);
        this.nombre=nombre;
        this.vida=vida;
        this.mana=mana;
    }

    atacar(){
        this.lanzaHechizo();
    }

    lanzaHechizo(mana){
        console.log(`El mago lanza ThunderShock y ha consumido: ${mana}`);
    }
}

const personajes = [Guerrero, Mago];

let warrior = new Guerrero("Ernesto",200,50);
warrior.atacar();
warrior.ataqueEspecial(300);

let wizard = new Mago("Merlin",100,50);
wizard.lanzaHechizo(20);
wizard.atacar();

personajes.forEach(p => p.atacar());




//Fin reto final