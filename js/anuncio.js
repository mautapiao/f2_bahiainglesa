document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('anuncioForm');
    const nombreCompleto = document.getElementById('nombreCompleto');
    const nombreUsuario = document.getElementById('nombreUsuario');
    const fechaInicio = document.getElementById('fechaInicio');
    const fechaTermino = document.getElementById('fechaTermino');
    const resultado = document.getElementById('resultado');
    const btnLimpiar = document.getElementById('btnLimpiar');

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
    function frmLimpiar() {
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
            frmLimpiar(); // limpiamos el formulario 
        }, 5000);
    }

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' //  scroll suave de pagina
        });
    }
    // Validar en tiempo real cuando cambian las fechas
    fechaInicio.addEventListener('change', validarFechas);
    fechaTermino.addEventListener('change', validarFechas);


    // Función para validar las fechas
    function validarFechas() {
        const inicio = new Date(fechaInicio.value);
        const termino = new Date(fechaTermino.value);

        // Limpiar estados previos
        fechaInicio.classList.remove('is-invalid', 'is-valid');
        fechaTermino.classList.remove('is-invalid', 'is-valid');

        let esValido = true;

        // Validar que ambas fechas estén seleccionadas
        if (!fechaInicio.value) {
            fechaInicio.classList.add('is-invalid');
            esValido = false;
        }

        if (!fechaTermino.value) {
            fechaTermino.classList.add('is-invalid');
            esValido = false;
        }

        // Validar que inicio <= termino
        if (fechaInicio.value && fechaTermino.value) {
            if (inicio > termino) {
                fechaTermino.classList.add('is-invalid');
                esValido = false;
            } else {
                fechaInicio.classList.add('is-valid');
                fechaTermino.classList.add('is-valid');
            }
        }

        return esValido;
    }

    btnLimpiar.addEventListener('click', function () {
        frmLimpiar();
    });

    // Función para limpiar el formulario
    function resetForm() {
        alert('ewafsgdf');
        form.reset();
        fechaInicio.classList.remove('is-invalid', 'is-valid');
        fechaTermino.classList.remove('is-invalid', 'is-valid');
        resultado.innerHTML = '';
    }

    // Establecer fecha mínima como hoy 
    const hoy = new Date().toISOString().split('T')[0];
    fechaInicio.min = hoy;
    fechaTermino.min = hoy;


});