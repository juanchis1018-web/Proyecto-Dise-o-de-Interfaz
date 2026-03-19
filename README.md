# 🎓 Sistema Web de Gestión Académica

##Descripción
Este proyecto consiste en el desarrollo de un sistema web interactivo para la gestión académica de estudiantes. Permite registrar estudiantes, administrar sus materias y notas, así como consultar reportes personalizados.

El sistema está diseñado con una arquitectura modular, navegación por múltiples páginas y una interfaz intuitiva orientada a la experiencia de usuario (UX).



##Funcionalidades principales

###Autenticación
- Login de usuario (simulado con LocalStorage)
- Protección de rutas (no permite acceso sin iniciar sesión)

###Dashboard
- Panel principal moderno con navegación por tarjetas
- Acceso a todos los módulos del sistema

###Gestión de Estudiantes
- Registro de estudiantes con ID único
- Edición y eliminación de estudiantes
- Búsqueda en tiempo real
- Ordenamiento alfabético (A-Z)
- Validación de datos (edad positiva, campos obligatorios)

###Gestión de Materias
- Asignación de múltiples materias por estudiante
- Registro de notas por dos cortes académicos (Corte 1 y Corte 2)

###Reportes
- Consulta de estudiantes por ID
- Visualización de materias inscritas
- Visualización de notas por corte

###Configuración
- Modo oscuro (básico)
- Eliminación de datos almacenados

###Perfil
- Gestión básica de usuario (simulado)



##Arquitectura del Proyecto

El sistema está organizado en múltiples páginas (arquitectura modular):
