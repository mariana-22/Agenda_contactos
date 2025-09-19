
# Informe de  agenda de contactos.
## Clases utilizadas - Contacto

##  Tecnologías utilizadas
- *TypeScript* (programación tipada en JavaScript)
- *Node.js*
- *@inquirer/prompts* → Librería para mostrar menús y entradas interactivas en la consola

---

##  Estructura del código
- Contacto.ts → Define la clase Contacto y sus métodos.
- main.ts → Lógica de la agenda:
  - Almacena los contactos en un arreglo
  - Gestiona el menú interactivo
  - Controla las operaciones  (Agregar, Actualizar, Mostrar, Borrar,Salir)

---

## 1. Contexto

Este proyecto permite manejar un sistema simple de gestión de contactos, con funcionalidades para crear, actualizar y mostrar información, así como para persistir datos en almacenamiento local o base de datos.

## 2. Inventario de Clases Analizadas

- Clase 1: `Contacto` — Representa un contacto con sus datos básicos y métodos para actualizar y mostrar la información.


#3. Análisis por Clase

# 3.1 Informe 1 SO

### `Contacto`  
**Responsabilidad declarada:** Representar un contacto con sus datos y métodos para actualizar y mostrar su información.

##**S (Single Responsibility)**  
- **Diagnóstico:** Cumple  
- **Justificación:** La clase está enfocada únicamente en modelar el contacto y operaciones básicas sobre sus datos. No mezcla responsabilidades de persistencia ni validación externa.  
- **Riesgo si se mantiene así:** Bajo, mantiene cohesión y facilidad para pruebas unitarias.

##**O (Open/Closed)**  
- **Diagnóstico:** Cumple parcialmente  
- **Justificación:** La clase es simple y permite extenderla mediante herencia o composición, aunque no implementa interfaces ni patrones específicos para extensión sin modificarla. Dada su simplicidad, esto no representa un problema inmediato.  
- **Propuesta:** Para futuras funcionalidades como validación o formatos especiales, usar composición para evitar modificar la clase.

**Refactor propuesto (opcional)**  
Separar validación y otras funcionalidades en clases externas para mantener la clase `Contacto` abierta a extensión sin modificar su código base.

**Conclusiones**
En el analisis realiazado identificamos las siguinetes conclusiones principales:
*Cumplimiento de principios de responsabilidad unica:*


La clase analizda de contactos cumple adecuadamnete con SRP,ya que cada una esta enfocada en una unica responsabilidad bien definida:manejo de datos 
y persistencia respectivamente 


*Cumplimiento parcial del principios abierto/cerrado:*
La clase contacto es relativamente facil de extender sin modidficarl,aunque no implementa explicitamente interfaces o patrones para extensión ,lo cual es 
aceptable dado a asu nivel de simplicidad.


**Posibles soluciones**
La clase Contacto puede mantenerse tal cual o mejorarse a futuro mediante composición para funcionalidades adicionales, sin ser urgente.
Este enfoque facilitará la mantenibilidad, escalabilidad y calidad del proyecto a mediano y largo plazo.


#  Informe 2 LID

Este proyecto es una agenda interactiva desarrollada en TypeScript que permite agregar, actualizar, mostrar y eliminar contactos mediante un menú interactivo en consola usando `@inquirer/prompts`.

---

##  I (Principio de Agregación de Interfaces (ISP))

### ¿Se aplica el Principio de Agregacion de Interfaces?

No se aplica directamente.

### **¿Por qué?**

El código actual no utiliza interfaces segmentadas para separar responsabilidades. Solo hay una clase principal (Contacto) que agrupa todos los datos y comportamientos relacionados con un contacto. Además, no existen diferentes tipos de contactos (por ejemplo, personales, empresariales, de emergencia) que requieran implementar distintas interfaces.

Aunque el código no está violando el principio (porque no se obliga a ninguna clase a implementar métodos innecesarios), tampoco lo está aplicando explícitamente, ya que no hay uso de interfaces específicas.

---

##  ¿Cuál sería una posible solución para aplicar el ISP?

Podríamos dividir las responsabilidades del contacto en varias interfaces pequeñas y especializadas, de manera que las clases implementen únicamente lo que necesitan.

###  Ejemplo propuesto:

```ts
// Interfaces separadas
interface IContactoBase {
    nombre: string;
    telefono: number;
    email: string;
    actualizarContacto(nombre: string, telefono: number, email: string): void;
}

interface IContactoEmpresarial {
    empresa: string;
    cargo: string;
}

interface IContactoEmergencia {
    relacionEmergencia: string;
}
_
```
###  Implementacones separadas:

```ts
// Contacto personal
class ContactoPersonal implements IContactoBase {
    constructor(public nombre: string, public telefono: number, public email: string) {}

    actualizarContacto(nombre: string, telefono: number, email: string): void {
        this.nombre = nombre;
        this.telefono = telefono;
        this.email = email;
    }
}

// Contacto empresarial
class ContactoEmpresarial implements IContactoBase, IContactoEmpresarial {
    constructor(
        public nombre: string,
        public telefono: number,
        public email: string,
        public empresa: string,
        public cargo: string
    ) {}

    actualizarContacto(nombre: string, telefono: number, email: string): void {
        this.nombre = nombre;
        this.telefono = telefono;
        this.email = email;
    }
}

// Contacto de emergencia
class ContactoEmergencia implements IContactoBase, IContactoEmergencia {
    constructor(
        public nombre: string,
        public telefono: number,
        public email: string,
        public relacionEmergencia: string
    ) {}

    actualizarContacto(nombre: string, telefono: number, email: string): void {
        this.nombre = nombre;
        this.telefono = telefono;
        this.email = email;
    }
}




