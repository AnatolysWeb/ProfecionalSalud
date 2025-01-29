// Capturamos el formulario y agregamos un evento para manejar el envío
document.getElementById('turnoForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Evita que la página se recargue

    // Obtener los valores ingresados por el usuario
    const nombre = document.getElementById('nombre').value;
    const fecha = document.getElementById('fecha').value;
    const hora = document.getElementById('hora').value;
    const consultorio = document.getElementById('consultorio').value;
    const motivo = document.getElementById('motivo').value;

    // Crear un nuevo div para representar el turno
    const turnoDiv = document.createElement('div');
    turnoDiv.classList.add('turno');

    // Insertar los datos del turno en el nuevo div
    turnoDiv.innerHTML = `
        <p><strong>Paciente:</strong> ${nombre}</p>
        <p><strong>Fecha:</strong> ${fecha}</p>
        <p><strong>Hora:</strong> ${hora}</p>
        <p><strong>Consultorio:</strong> ${consultorio}</p>
        <p><strong>Motivo:</strong> ${motivo}</p>
    `;

    // Agregar el turno a la lista
    document.getElementById('turnosList').appendChild(turnoDiv);

    // Limpiar el formulario
    document.getElementById('turnoForm').reset();
});
