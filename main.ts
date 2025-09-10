import { Contacto } from "./Mariana.ts"
import { input, select } from '@inquirer/prompts';
/*let contacto1= new contacto (1,"sara",123456789,"saramartinez05@gmail.com")
console.log(contacto1.mostrarContacto());
let contacto2= new contacto (2,"maria",987654321,"mariasr@gmail.com")
console.log(contacto2.mostrarContacto());
let contacto3= new contacto (3,"ana",456789123," ana08@gmail.com")
console.log(contacto3.mostrarContacto());
*/
let agenda: Contacto[] = [];
while (true) {
    const opcion = await select({
        message: 'Seleccione una opción:',
        choices: [{ name: 'Agregar contacto', value: 'agregar' },
        { name: 'Actualizar contacto', value: 'actualizar' },
        { name: 'Mostrar contactos', value: 'mostrar' },
        { name: 'Salir', value: 'salir' },
        { name: 'Borrar contacto', value: 'borrar' }],
    });
    switch (opcion) {
        case "agregar":
            const nombre = await input({ message: 'Ingrese Nombre:' });
            const telefono = await input({ message: 'Ingrese Teléfono:' });
            const email = await input({ message: 'Ingrese Email:' });
            const nuevoContacto = new Contacto(nombre, Number(telefono), email);
            agenda.push(nuevoContacto);
            console.log('Contacto agregado exitosamente.');
            break;
        case "mostrar":
            if (agenda.length === 0) {
                console.log('No hay contactos en la agenda.');
            } else {
                console.log('Contactos en la agenda:');
                console.table(
                    agenda.map((contacto) => ({
                    Nombre: contacto.nombre,
                        Teléfono: contacto.telefono,
                        Email: contacto.email
                    })) 
                );
            }
            break;
            case "actualizar":
            const id = await input({ message: 'Ingrese ID A actualizar:' });
            const nombre2 = await input({ message: 'Ingrese Nombre:' });
            const telefono2= await input({ message: 'Ingrese Teléfono:' });
            const email2= await input({ message: 'Ingrese Email:' });
            const index = agenda.findIndex((contacto, i) => i === Number(id));
            if (index !== -1) {
                agenda[index].actualizarContacto(nombre2, Number(telefono2), email2);
            } else {
                console.log('Contacto no encontrado.');
            }
            break;
            case "borrar":
            const id3 = await input({ message: 'Ingrese ID borrar:' });
            const index3 = agenda.findIndex((contacto, i) => i === Number(id3));
            if (index3 !== -1) {
                agenda.splice(index3, 1);
                console.log('Contacto borrado exitosamente.');
            } else {
                console.log('Contacto no encontrado.');
            }
            break;
        case "salir":
            console.log('Saliendo de la agenda.');
            break;
    }

}
