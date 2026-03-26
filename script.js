// 🔒 PROTEGER RUTA
if (localStorage.getItem("login") !== "true") {
    window.location.href = "login.html";
}

let estudiantes = JSON.parse(localStorage.getItem("estudiantes")) || [];

// 🔔 TOAST
function mostrarToast(msg) {
    document.getElementById("toastMsg").innerText = msg;
    let toast = new bootstrap.Toast(document.getElementById("toast"));
    toast.show();
}

// 🔓 LOGOUT
function logout() {
    localStorage.removeItem("login");
    window.location.href = "login.html";
}

// 🔙 DASHBOARD
function irDashboard() {
    window.location.href = "dashboard.html";
}

// 💾 GUARDAR ESTUDIANTE
function guardarEstudiante() {
    let idEstudiante = document.getElementById("idEstudiante").value.trim();
    let nombre = document.getElementById("nombre").value.trim();
    let edad = parseInt(document.getElementById("edad").value);
    let correo = document.getElementById("correo").value.trim();
    let curso = document.getElementById("curso").value.trim();

    if (!idEstudiante || !nombre || !edad || !correo || !curso) {
        mostrarToast("Completa todos los campos");
        return;
    }

    if (edad <= 0) {
        mostrarToast("Edad inválida");
        return;
    }

    // 🚫 evitar IDs repetidos
    let existe = estudiantes.find(e => e.idEstudiante === idEstudiante);
    if (existe) {
        mostrarToast("El ID ya existe");
        return;
    }

    estudiantes.push({
        idEstudiante,
        nombre,
        edad,
        correo,
        curso,
        materias: []
    });

    localStorage.setItem("estudiantes", JSON.stringify(estudiantes));
    mostrarToast("Estudiante agregado");
    limpiarFormulario();
    mostrarEstudiantes();
}

// 👁 MOSTRAR
function mostrarEstudiantes(lista = estudiantes) {
    let tabla = document.getElementById("tablaEstudiantes");
    tabla.innerHTML = "";

    lista.forEach(est => {
        tabla.innerHTML += `
        <tr>
            <td>${est.idEstudiante}</td>
            <td>${est.nombre}</td>
            <td>${est.edad}</td>
            <td>${est.correo}</td>
            <td>${est.curso}</td>
            <td>
                <button class="btn btn-warning btn-sm" onclick="editar('${est.idEstudiante}')">Editar</button>
                <button class="btn btn-danger btn-sm" onclick="eliminar('${est.idEstudiante}')">Eliminar</button>
                <button class="btn btn-info btn-sm" onclick="irMaterias('${est.idEstudiante}')">Materias</button>
            </td>
        </tr>`;
    });
}

// ✏️ EDITAR
function editar(idEstudiante) {
    let est = estudiantes.find(e => e.idEstudiante === idEstudiante);

    document.getElementById("idEstudiante").value = est.idEstudiante;
    document.getElementById("nombre").value = est.nombre;
    document.getElementById("edad").value = est.edad;
    document.getElementById("correo").value = est.correo;
    document.getElementById("curso").value = est.curso;

    // eliminar para luego guardar como actualización
    estudiantes = estudiantes.filter(e => e.idEstudiante !== idEstudiante);
}

// 🗑 ELIMINAR (ARREGLADO)
function eliminar(idEstudiante) {
    estudiantes = estudiantes.filter(e => e.idEstudiante !== idEstudiante);

    localStorage.setItem("estudiantes", JSON.stringify(estudiantes));
    mostrarToast("Estudiante eliminado");
    mostrarEstudiantes();
}

// 🔍 BUSCAR
function buscarEstudiante() {
    let texto = document.getElementById("buscar").value.toLowerCase();

    let filtrados = estudiantes.filter(e =>
        e.nombre.toLowerCase().includes(texto) ||
        e.curso.toLowerCase().includes(texto)
    );

    mostrarEstudiantes(filtrados);
}

// 🔤 ORDENAR
function ordenarAZ() {
    estudiantes.sort((a, b) => a.nombre.localeCompare(b.nombre));
    mostrarToast("Ordenado A-Z");
    mostrarEstudiantes();
}

// 🧼 LIMPIAR
function limpiarFormulario() {
    document.getElementById("idEstudiante").value = "";
    document.getElementById("nombre").value = "";
    document.getElementById("edad").value = "";
    document.getElementById("correo").value = "";
    document.getElementById("curso").value = "";
}

// 📚 IR A MATERIAS
function irMaterias(id) {
    localStorage.setItem("estudianteSeleccionado", id);
    window.location.href = "materias.html";
}

// 🚀 INICIAL
mostrarEstudiantes();