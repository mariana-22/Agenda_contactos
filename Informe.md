
# Informe de  agenda de contactos.


## 1. Principio de Responsabilidad Única (SRP)

### A nivel de clase
La clase `Contacto` tiene una única responsabilidad: representar y gestionar la información de un contacto. Esto facilita su comprensión y mantenimiento.

### A nivel de métodos

- **constructor:** Su única responsabilidad es inicializar los atributos del contacto. Cumple con SRP.
- **actualizarContacto:** Su responsabilidad es actualizar todos los datos del contacto. Cumple con SRP, aunque podría dividirse si se requieren actualizaciones parciales.
- **mostrarContacto:** Su responsabilidad es mostrar la información del contacto en formato de texto. Cumple con SRP.

## 2. Posibles Cambios de Mejora

1. **Validaciones:** Agregar validaciones para los datos (por ejemplo, formato de email, longitud del teléfono).
2. **Privacidad:** Usar modificadores de acceso como `private` para proteger los atributos y exponer getters/setters si es necesario.
3. **Documentación:** Añadir comentarios de documentación para mejorar la mantenibilidad.
4. **Extensibilidad:** Preparar la clase para futuras extensiones usando interfaces o herencia si se requieren más tipos de contactos.

## 3. Conclusiones

La clase `Contacto` cumple con el principio de responsabilidad única (SRP). Implementar las recomendaciones sugeridas puede mejorar la robustez, seguridad y escalabilidad del código.

 