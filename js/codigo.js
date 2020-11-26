const formulario = document.querySelector('.form-group')

cargarEventListeners()
function cargarEventListeners(){
    formulario.addEventListener('submit', EnviarForm);
}


function EnviarForm(e) {
    e.preventDefault();
    
    // Obtener datos del formulario
    const nombre = document.querySelector('#nombre-form').value;
    const email = document.querySelector('#email-form').value;

    if (!nombre|| !email ) {
       
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Debes ingresar todos tus datos completos para una mejor experiencia!',
          })
          
    } else {
        if(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(email)){
            Swal.fire({
                title: `Gracias ${nombre} por enviar tus comentarios. Te responderemos a la brevedad 🖤`,
                width: 600,
                padding: '3em',
                background: '#fff url(/images/trees.png)',
                backdrop: `
                  rgba(0,0,123,0.4)
                  url("../images/nyan-cat.gif")
                  left top
                  no-repeat
                `
              })
        }          
    }

    formulario.reset();
}