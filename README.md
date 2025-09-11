#  Agenda de Contactos en TypeScript

Este proyecto implementa una *agenda interactiva* en consola utilizando *TypeScript*.  
Permite *agregar, mostrar, actualizar y borrar contactos*, todo desde un menú con opciones.

---

##  Características principales
-  Definición de un tipo Contacto con:
  - nombre
  - telefono
  - email
-  Clase Contacto con métodos para:
  - *Actualizar un contacto*
  - *Mostrar un contacto en formato de texto*
-  Menú interactivo con opciones:
  - Agregar contacto
  - Mostrar contactos
  - Actualizar contacto
  - Borrar contacto
  - Salir

---

## 🛠 Tecnologías utilizadas
- *TypeScript* (programación tipada en JavaScript)
- *Node.js*
- *@inquirer/prompts* → Librería para mostrar menús y entradas interactivas en la consola

---

##  Estructura del código
- Contacto.ts → Define la clase Contacto y sus métodos.
- main.ts → Lógica de la agenda:
  - Almacena los contactos en un arreglo
  - Gestiona el menú interactivo
  - Controla las operaciones CRUD (Crear, Leer, Actualizar, Borrar)

---

##  Instalación y uso

1. *Clonar el repositorio*  
   ```bash
   git clone https://github.com/usuario/agenda-contactos-ts.git
   cd agenda-contactos-ts
