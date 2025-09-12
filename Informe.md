
# Informe de  agenda de contactos.
## Clases utilizadas - Contacto



## 1. Contexto

Este proyecto permite manejar un sistema simple de gestión de contactos, con funcionalidades para crear, actualizar y mostrar información, así como para persistir datos en almacenamiento local o base de datos.

## 2. Inventario de Clases Analizadas

- Clase 1: `Contacto` — Representa un contacto con sus datos básicos y métodos para actualizar y mostrar la información.


## 3. Análisis por Clase

### 3.1 `Contacto`  
**Responsabilidad declarada:** Representar un contacto con sus datos y métodos para actualizar y mostrar su información.

**S (Single Responsibility)**  
- **Diagnóstico:** Cumple  
- **Justificación:** La clase está enfocada únicamente en modelar el contacto y operaciones básicas sobre sus datos. No mezcla responsabilidades de persistencia ni validación externa.  
- **Riesgo si se mantiene así:** Bajo, mantiene cohesión y facilidad para pruebas unitarias.

**O (Open/Closed)**  
- **Diagnóstico:** Cumple parcialmente  
- **Justificación:** La clase es simple y permite extenderla mediante herencia o composición, aunque no implementa interfaces ni patrones específicos para extensión sin modificarla. Dada su simplicidad, esto no representa un problema inmediato.  
- **Propuesta:** Para futuras funcionalidades como validación o formatos especiales, usar composición para evitar modificar la clase.

**Refactor propuesto (opcional)**  
Separar validación y otras funcionalidades en clases externas para mantener la clase `Contacto` abierta a extensión sin modificar su código base.

**Conclusiones**
En el analisis realiazado identificamos las siguinetes conclusiones principales:
*Cumplimiento de principios de responsabilidad unsica:*
La clase analizda de contactos cumple adecuadamnete con SRP,ya que cada una esta enfocada en una unica responsabilidad bien definida:manejo de datos 
y persistencia respectivamente 


*Cumplimiento parcial del principios abierto/cerrado:*
La clase contacto es relativamente facil de extender sin modidficarl,aunque no implementa explicitamente interfaces o patrones para extensión ,lo cual es 
aceptable dado a asu nivel de simplicidad.


**Posibles soluciones**
La clase Contacto puede mantenerse tal cual o mejorarse a futuro mediante composición para funcionalidades adicionales, sin ser urgente.
Este enfoque facilitará la mantenibilidad, escalabilidad y calidad del proyecto a mediano y largo plazo.


