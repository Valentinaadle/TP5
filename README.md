**API REST de Productos**

Esta API sigue los principios REST utilizando métodos HTTP estándar (GET, POST, PUT, DELETE) con URLs descriptivas como '/productos'. Es stateless, devuelve respuestas JSON y códigos de estado claros (200, 404, etc.), lo que permite su uso desde cualquier cliente.

**Diferencias con la versión anterior**

La principal diferencia está en la capa de presentación: mientras antes generábamos HTML para navegadores, ahora devolvemos JSON para múltiples clientes. Mantenemos la misma estructura de 3 capas (presentación, negocio y datos), pero la capa de presentación ahora se enfoca en entregar datos en lugar de interfaces. Esto hace la API más flexible para integrarse con web, móviles y demas servicios.