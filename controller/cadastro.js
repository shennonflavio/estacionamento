import { service } from "../service/index.js";
import { view } from "../view/index.js";

export const CadastroComponent = () => {
    let label = [];
    service.getVeiculo().then((dados) => {
        dados.forEach(element => {
            if (element.label != null) {
                label.push(element.label)
            }
        });
    })

    view.getCadastroHtml();

    const formulario = document.getElementById('formulario');
    formulario.addEventListener('submit', function (e) {
        e.preventDefault();

        const cadastroCliente = {
            owner: document.getElementById('name').value,
            model: document.getElementById('modelo').value,
            type: document.getElementById('tipo').value,
            label: document.getElementById('placa').value,
            observation: document.getElementById('observacoes').value
        }

        if (label.includes(cadastroCliente.label)) {
            return alert(`A placa ${cadastroCliente.label} já está cadastrada. `)
        } else {
            service.postVeiculo(cadastroCliente);
        }


    })
}