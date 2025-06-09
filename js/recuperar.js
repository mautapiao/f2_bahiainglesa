const frmRecuperar = document.getElementById('frmRecuperar');

frmRecuperar.addEventListener('submit', function (event) {

    event.preventDefault();

    const alert = document.getElementById('alert');
    const alertCheck = document.getElementById('alertCheck');

    // oculto alerta si esta presente
    alertCheck.classList.add('d-none');

    // Mostrar
    alert.classList.remove('d-none');

    setTimeout(() => alert.classList.add('show'), 20); // Pequeño delay para la animación

    // Ocultar después de 5 segundos
    setTimeout(() => {
        alert.classList.remove('show');

        setTimeout(() => alert.classList.add('d-none'), 300);

        // mostrar envio
        setTimeout(() => alertCheck.classList.add('show'), 20); // Pequeño delay para la animación

        alertCheck.classList.remove('d-none');
        frmRecuperar.reset();

    }, 2000);
});
