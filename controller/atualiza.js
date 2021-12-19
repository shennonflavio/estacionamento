import { service } from "../service/index.js";
import { view } from "../view/index.js"
import { listaClienteComponent } from "./listaClientes.js";

export const AtualizaComponent = (idParams) => {

    let label = [];
    service.getVeiculo().then((dados) => {
        dados.forEach(element => {
            if (element.label != null) {
                label.push(element.label)
            }
        });
    })


    view.getAtulalizaHtml();
    service.getVeiculo().then((dados) => {
        dados.forEach(element => {
            if (element.id == idParams) {
                adicionaParametroNoInput(element);
            }
        });
    })

    const formulario = document.getElementById('formulario');
    formulario.addEventListener('submit', function (e) {
        e.preventDefault();

        const atualizaCliente = {
            owner: document.getElementById('name').value,
            model: document.getElementById('modelo').value,
            type: document.getElementById('tipo').value,
            label: document.getElementById('placa').value,
            observation: document.getElementById('observacoes').value
        }

        if (label.includes(atualizaCliente.label)) {
            return alert(`A placa ${cadastroCliente.label} já está cadastrada. `)
        } else {
            service.putVeiculo(atualizaCliente, idParams).then(() => {
                cancelar();
                listaClienteComponent();
            })

        }




    })
}


const adicionaParametroNoInput = (objeto) => {


    document.getElementById('name').value = objeto.owner
    document.getElementById('modelo').value = objeto.model
    document.getElementById('tipo').value = objeto.type
    document.getElementById('placa').value = objeto.label
    document.getElementById('observacoes').value = objeto.observation


}


const cancelar = () => {
    const formulario = document.getElementById('formulario');

    formulario.reset()
}