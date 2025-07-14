//PROPIEDADES Y OBJETOS

// Ejercicio 1: Libro (Objeto básico + if)
// Crear un sistema de préstamo de libros.
// Tareas:
// 1.Usa el constructor Libro para crear un objeto con título y autor.
// 2.Agrega una propiedad prestado = false.
// 3.Implementa el método prestar() que:
// •Cambie prestado a true si el libro está disponible.
// •Muestre un mensaje de error si ya está prestado (usando if).
// 4.Prueba prestar el libro dos veces y observa los mensajes.

class Libro {
    constructor(titulo, autor) {
        this.titulo = titulo;
        this.autor = autor;
        this.prestado = false
    }
    prestar = function (){
            if (this.prestado === false){
                this.prestado = true
                console.log("Libro prestado")
            } else {
                console.log("Libro ya prestado")
            }
        }
    no_prestar = function (){
            if (this.prestado === true){
                this.prestado = false
                console.log("Libro Disponible")
            } else {
                console.log("Libro ya Disponible")
            }
        }
}

let libro1 = new Libro("Cien años de seriedad","Gabo")
let libro2 = new Libro("Harry Potter","JK Rowling")

libro2.prestar()
libro2.prestar()
libro2.prestar()

libro2.no_prestar()
libro2.no_prestar()
libro2.no_prestar()

// Ejercicio 2: Lista de Compras (Array + for)
// Gestionar una lista dinámica de productos.
// Tareas:
// 1.Usa el constructor ListaCompras para crear una lista vacía (this.productos = []).
// 2.Añade 3 productos con el método agregar().
// 3.Implementa el método mostrar() que use un for para listar los productos numerados (ej:
// "1. Manzanas").
// 4.Muestra la lista completa en consola

class ListaCompras {
    constructor(){
        this.productos = []
    }
    agregar (producto) {
        this.productos.push(producto)
    }
    mostrar () {
        for(let i = 0; i<this.productos.length;i++){
            console.log(`${i+1}.`, this.productos[i])
        }
    }
}

let compras = new ListaCompras
compras.agregar('manzana')
compras.agregar('pera')
compras.agregar('coco')
compras.mostrar()

// Ejercicio 3: Reproductor de Música
// Tareas:
// 1.Crea un objeto Reproductor usando una función constructora con:
// •Una propiedad estado con valor inicial "detenido" (otros valores
// posibles: "reproduciendo", "pausado").
// 2.Implementa estos métodos:
// •play():
// •Si el estado es "detenido" o "pausado", cambia a "reproduciendo" y muestra: "Reproduciendo
// música...".
// •Si ya está reproduciendo, muestra: "Ya se está reproduciendo música.".
// •pausar():
// •Si el estado es "reproduciendo", cambia a "pausado" y muestra: "Música pausada.".
// •Si no, muestra: "No hay música reproduciéndose.".
// •detener(): Cambia el estado a "detenido" y muestra: "Música detenida."

class Reproductor {
    constructor(){
        this.estado = 'detenido';
    }
    play () {
        if(this.estado != 'reproduciendo'){
            this.estado = 'reproduciendo'
            console.log("Reproduciendo musica.")
        } else console.log("Ya se esta reproduciendo musica.")
    }
    pausar (){
        if(this.estado === 'reproduciendo'){
            this.estado = 'pausado'
            console.log("Musica pausada.")
        } else console.log("No hay musica reproduciendose.")
    }
    detenido (){
        if(this.estado != 'detenido'){
            this.estado = 'detenido'
            console.log("Musica detenida.")
        }
    }
}

let reproductor1 = new Reproductor
reproductor1.play()
reproductor1.play()
reproductor1.pausar()
reproductor1.pausar()
reproductor1.detenido()
reproductor1.detenido()


// Ejercicio 4: Carrito de Compras con Descuentos (manejo de estados en un objeto
// usando métodos y condicionales (if/else).
// Tareas:
// 1. Crea un objeto Carrito usando una función constructora o clase que tenga:
// •Una propiedad productos (array vacío).
// •Una propiedad total (inicialmente 0).
// 2.Implementa estos métodos:
// •agregarProducto(nombre, precio): Añade el producto al array y suma el precio al total.
// •calcularDescuento():
// •Si el total es mayor a $100, aplica un 10% de descuento y muestra.
// •Si el total es mayor a $50 pero menor o igual a $100, aplica un 5% de descuento y muestra.
// •Si no, mostrar total, sin descuento.

class Carrito {
    constructor(productos,total){
        this.productos = []
        this.total = 0
        this.descuento = 1
    }
    agregarProducto(nombre, precio) {
        this.productos.push(nombre)
        this.total+=precio
        console.log("Productos en carrito: ", this.productos)
        console.log("Total: ", this.total)

    }
    calcularDescuento(){
        if (this.total>100) {
            this.descuento = 0.9
            console.log(`Total con 10% de descuento: `,this.total*this.descuento)
        } else if (this.total>50){
            this.descuento = 0.95
            console.log(`Total con 5% de descuento: `,this.total*this.descuento)
        } else {
            console.log(`Total sin descuento: `,this.total)
        }
            
    }
}

let carrito1 = new Carrito
carrito1.agregarProducto("Pera",25)
carrito1.agregarProducto("Manzana",15)
carrito1.calcularDescuento()