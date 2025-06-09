const form = document.getElementById('frmLogin');

// Manejar envío del formulario
form.addEventListener('submit', function (event) {
    const emailIngresado = document.getElementById('email').value;

    event.preventDefault();
    event.stopPropagation();

    switch (emailIngresado) {
        case "admin@bahiainglesa.cl":           
            window.location.href = "admin_page.html";
            break; 
        case "editor@bahiainglesa.cl":
            window.location.href = "editor_page.html";
            break;
        case "usuario@gmail.com":
            window.location.href = "usuario_page.html";
            break;
        default: 
            
            const alert = document.getElementById('alertFailLogin');
            alert.classList.remove('d-none');
            alert.classList.add('fade', 'show'); // Animación de fade in

    }

});

