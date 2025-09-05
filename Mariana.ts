
    type id= number
    type nombre=string
    type telefono=number
    type email=string

class contacto {
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
    
}



/**primero crear type, despues crear la clase agenda y atributo contacto privado despues agregar contactos */