const form = document.getElementById('frmLogin');

// Manejar envío del formulario
form.addEventListener('submit', function (event) {
    const emailIngresado = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    event.preventDefault();
    event.stopPropagation();

    switch (true) {
        case (emailIngresado === "admin@bahiainglesa.cl" && password==="123456"):               
            window.location.href = "admin_page.html";
            break; 
        case (emailIngresado === "editor@bahiainglesa.cl" && password==="123456"):           
            window.location.href = "editor_page.html";
            break;
        case (emailIngresado === "usuario@gmail.com" && password==="123456"):          
            window.location.href = "usuario_page.html";
            break;
        default: 
            const alert = document.getElementById('alertFailLogin');
            alert.classList.remove('d-none');
            alert.classList.add('fade', 'show'); // Animación de fade in

    }

});

