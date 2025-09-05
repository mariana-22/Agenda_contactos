function obtener(arreglo: any[]): any {
    return arreglo[0]
}
function Obtenerprimer(numero: number[]): number {
    return numero[0]

}
function ObtenerPrimerElementoGenerico<T>(arreglo: T[]): T {
    return arreglo[0]


}
console.log(ObtenerPrimerElementoGenerico([1, 2, 3, 4, 5]));
console.log(ObtenerPrimerElementoGenerico(["a", "b", "c"]));
console.log(ObtenerPrimerElementoGenerico([]));

class CajaDeNumeros {
    contenido: number[] = []
    public agregar(item: number) {
        this.contenido.push(item)
    }
}
const caja = new CajaDeNumeros()
caja.agregar(1);
caja.agregar(2);
caja.agregar(4);

class Generica<T> {
    contenido: T[] = []
    public agregar(item: T):void {
        this.contenido.push(item)
    }
}
class Repositorio<T> {
     private items: T[] = []
    public agregar(item: T): void {

        this.items.push(item)
        
    }
    public nombre(): T[]{
    return this.items 
        
    }
}
type User ={id:number,name:string}
const  repositorio = new  Repositorio <User>
type iD = string
type precio = number

const productoId: iD = "123";
const productoPrecio: precio = 9999;

type Estados ="cargando"|"exitoso"|"fallido"
