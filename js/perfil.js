document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('perfilForm');
    const nombreCompleto = document.getElementById('nombreCompleto');
    const nombreUsuario = document.getElementById('nombreUsuario');
   
    // Manejar envío del formulario
    form.addEventListener('submit', function (event) {

        event.preventDefault();
        event.stopPropagation();

        form.classList.add('was-validated');

        if (form.checkValidity()) {

            // esta funciòn permite limpiar el formulario despues de 2 segundos  
            showAlert();

            // cuando hice el limpiado automatico
            // posicionaba el form al principio
            scrollToTop();
        }
    });

    // Botón limpiar
    function frmLimpiar (){
        form.reset();
        form.classList.remove('was-validated');

        const inputInvalidos = form.querySelectorAll('.is-invalid');
        inputInvalidos.forEach(input => {
            input.classList.remove('is-invalid');
        });
        // Limpiar validaciones personalizadas
    };

    function showAlert() {
        const alert = document.getElementById('alertSuccess');
        alert.classList.remove('d-none');
        alert.classList.add('fade', 'show'); // Animación de fade in

        setTimeout(() => {
            alert.classList.add('fade', 'hide');
            setTimeout(() => alert.classList.add('d-none'), 150); // Espera a que termine la animación
           // frmLimpiar(); // limpiamos el formulario 
        }, 2000);

    }

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' //  scroll suave de pagina
        });
    }

});