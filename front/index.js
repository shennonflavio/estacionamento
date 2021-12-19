import { CadastroComponent } from "./controller/cadastro.js";
import { listaClienteComponent } from "./controller/listaClientes.js";

const link = document.getElementById('link');

link.addEventListener('click', (event) => {
    event.preventDefault()
    const option = event.path[0].innerText;

    switch (option) {
        case "Cadastro":
            CadastroComponent();
            break;
        case "Clientes":
            listaClienteComponent();
            break;
        case "Checkin": {
            window.location.href = "./checkin.html";
            break;
        }

        case value:

            break;
        case value:

            break;

        default:
            break;
    }
})