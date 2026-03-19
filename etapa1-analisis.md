# ETAPA 1 - ANÁLISIS

## Nombre del proyecto
Sistema Web de Gestión Académica


## Integrantes
Juan Sebastian Muñoz Melo


## Problema que se quiere resolver
Actualmente, muchas instituciones educativas o entornos académicos no cuentan con herramientas simples y accesibles para gestionar la información de estudiantes, sus materias y sus calificaciones.

El manejo manual o desorganizado de esta información puede generar errores, pérdida de datos y dificultad para consultar el rendimiento académico de los estudiantes.

Este sistema busca proporcionar una solución web sencilla e interactiva que permita administrar estudiantes, materias y notas de forma eficiente y organizada.


## Usuarios del sistema
Los usuarios del sistema serán:

- Estudiantes
- Docentes
- Administradores académicos
- Personas que necesiten gestionar información académica


## Entrada del sistema
Datos que el usuario ingresará:

### 🔹 Estudiantes
- ID del estudiante
- Nombre
- Edad
- Correo electrónico
- Curso

### 🔹 Materias
- Nombre de la materia
- Nota Corte 1
- Nota Corte 2

## Proceso del sistema
El sistema realizará lo siguiente:

- Registrar estudiantes en el sistema
- Validar la información ingresada
- Almacenar datos en el navegador (LocalStorage)
- Permitir la edición y eliminación de estudiantes
- Asignar múltiples materias a cada estudiante
- Registrar notas por cortes académicos
- Consultar información por ID del estudiante
- Mostrar reportes académicos

## Salida del sistema
El sistema mostrará:

- Lista de estudiantes registrados
- Información detallada de cada estudiante
- Materias inscritas por estudiante
- Notas por cada corte académico
- Reportes académicos personalizados por ID


## Alcance del sistema
El sistema permitirá:

- Registrar estudiantes
- Editar y eliminar estudiantes
- Asignar materias
- Registrar notas por cortes
- Consultar reportes académicos
- Navegar entre diferentes módulos del sistema

El sistema NO incluirá:

- Conexión a bases de datos externas (solo LocalStorage)
- Autenticación con servidores reales
- Integración con sistemas educativos reales
- Procesos de matrícula oficiales


## Arquitectura de la información (AI)
El sistema está dividido en las siguientes secciones:

- Pantalla de login
- Dashboard (panel principal)
- Gestión de estudiantes
- Gestión de materias
- Reportes
- Perfil de usuario
- Configuración


## Patrones de navegación
Los patrones de navegación utilizados son:

- Navegación por botones
- Dashboard con tarjetas interactivas
- Botón de regreso al dashboard
- Redirección entre páginas
- Control de acceso mediante login


## Patrones de interacción
Los patrones de interacción utilizados son:

- Formularios de entrada de datos
- Botones de acción (guardar, eliminar, editar)
- Tablas dinámicas
- Búsqueda en tiempo real
- Ordenamiento de datos
- Notificaciones tipo Toast
- Navegación entre vistas


## Wireframes
Los wireframes fueron diseñados como prototipos de baja fidelidad, representando la estructura del sistema.

Incluyen:

- Pantalla de login
- Dashboard principal
- Gestión de estudiantes
- Gestión de materias
- Reportes académicos
- Configuración del sistema
