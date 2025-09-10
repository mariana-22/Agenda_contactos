
    type nombre=string
    type telefono=number
    type email=string

export class Contacto {
        nombre:nombre;
        telefono:telefono;
        email:email;

    constructor(nombre:nombre, telefono:telefono, email:email){
        this.nombre=nombre;
        this.telefono=telefono;
        this.email=email;
        
    }
    actualizarContacto(nombre: nombre, telefono: telefono, email: email): void {
        this.nombre = nombre;
        this.telefono = telefono;
        this.email = email;
    }

    mostrarContacto(): string {
        return `Nombre: ${this.nombre}, Teléfono: ${this.telefono}, Email: ${this.email}`;
    }
}





/**primero crear type, despues crear la clase agenda y atributo contacto privado despues agregar contactos */
