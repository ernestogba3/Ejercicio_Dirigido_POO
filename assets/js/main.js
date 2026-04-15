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
        this.#vida=vida <0 ? 0 : vida;
    }

    atacar(){
        console.log(`el heroe: ${this.nombre} esta atacando...`);
    }

    recibirDaño(cantidad){

        this.#vida-=cantidad;

        if(this.#vida <=0){
            console.log("Has muerto...");
            this.#vida=0;
            return;
        }
        console.log(`Has recibido: ${cantidad} de daño, tu vida restante es: ${this.#vida}`);
    }

    estaVivo(){
        return this.#vida >0;
    }
}

class Guerrero extends Personaje{
    constructor(nombre,vida,ataque){
        super(nombre,vida);
        
        this.ataque=ataque;
    }

    atacar(){
        console.log("Esta atacando el guerrero");
        this.ataqueEspecial();

    }
    ataqueEspecial(){
        console.log(`El guerrero ataca y te hace: ${this.ataque} de daño especial...`);
    }
}

class Mago extends Personaje{
    constructor(nombre,vida,mana){
        super(nombre,vida);
        this.mana=mana;
    }

    atacar(){
        console.log("El mago esta cargando el hechizo...");
        this.lanzaHechizo();
    }

    lanzaHechizo(){
        console.log(`El mago lanza ThunderShock y ha consumido: ${this.mana} de mana`);
    }
}

//Creo los objetos
const arturo = new Guerrero("Arturo", 150, 40);
const merlin = new Mago("Merlín", 80, 100);
//Lo meto en un array para poder iniciarlo en un bucle foreach
const equipo = [arturo, merlin];
//Creo el bucle y muestro por pantalla
console.log("--- COMIENZA EL COMBATE ---");
equipo.forEach(personaje => {
    personaje.atacar(); 
});
//Fin reto final