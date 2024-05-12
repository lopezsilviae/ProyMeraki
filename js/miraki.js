const formCarga = document.getElementById("form-cargar")

function RecibirConsulta(e){
    //cancelamos el evento por default
    e.preventDefault()
    //leer datos del form
    let cNombre = document.getElementById("nombre").value
    let cCelular = document.getElementById("celular").value
    let cEmail = document.getElementById("email").value
    let cCliente = document.getElementById("cliente").value
    let cConsulta = document.getElementById("consulta").value
    
    respuesta.innerHTML+=`
        <div >
            <div >
                <h3>Recibimos tu consulta</h3>
                <p>Gracia ${cNombre}
                </p>
            </div>
            
        </div>
        `
    }
    formCarga.addEventListener("submit",RecibirConsulta)
    //borramos los campos
