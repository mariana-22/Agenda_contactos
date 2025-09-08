
    type id= number
    type nombre=string
    type telefono=number
    type email=string

export class Contacto {
        id:id;
        nombre:nombre;
        telefono:telefono;
        email:email;

    constructor(id:id, nombre:nombre, telefono:telefono, email:email){
        this.id=id;
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
        return `ID: ${this.id}, Nombre: ${this.nombre}, Teléfono: ${this.telefono}, Email: ${this.email}`;
    }
}





/**primero crear type, despues crear la clase agenda y atributo contacto privado despues agregar contactos */
