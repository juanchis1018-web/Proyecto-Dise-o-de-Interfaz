let estudiantes = JSON.parse(localStorage.getItem("estudiantes")) || [];
let id = localStorage.getItem("estudianteSeleccionado");

let estudiante = estudiantes.find(e => e.idEstudiante == id);

function agregarMateria() {
    let nombre = document.getElementById("materia").value;
    let c1 = parseFloat(document.getElementById("corte1").value);
    let c2 = parseFloat(document.getElementById("corte2").value);

    if (!nombre || isNaN(c1) || isNaN(c2)) {
        alert("Completa los datos");
        return;
    }

    estudiante.materias.push({
        nombre,
        corte1: c1,
        corte2: c2
    });

    localStorage.setItem("estudiantes", JSON.stringify(estudiantes));
    mostrarMaterias();
}

function mostrarMaterias() {
    let tabla = document.getElementById("tablaMaterias");
    tabla.innerHTML = "";

    estudiante.materias.forEach(m => {
        tabla.innerHTML += `
        <tr>
            <td>${m.nombre}</td>
            <td>${m.corte1}</td>
            <td>${m.corte2}</td>
        </tr>`;
    });
}

function volver() {
    window.location.href = "dashboard.html";
}

mostrarMaterias();