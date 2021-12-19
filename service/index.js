const url = "http://localhost:8000/api"

const postVeiculo = (objetoCliente) => {
    console.log("objetoCliente:", objetoCliente)
    return fetch(url + "/vehicles", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(objetoCliente)
    }).then(
        (res) => {
            if (res.status != 200) {
                console.log(`erro:${res.status}`)
            } else {
                alert("Salvo com sucesso")
            }
        }
    )

}




const postCheckin = (label) => {
    return fetch(url + "/activities/checkin", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ label })
    }).then(
        (res) => {
            if (res.status != 200) {
                console.log(`erro:${res.status}`)
            } else {
                return res.json();
            }
        }
    )

}





const putVeiculo = (objetoCliente, id) => {
    return fetch(`${url}/vehicles/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(objetoCliente)
    }).then(
        (res) => {
            if (res.status != 200) {
                console.log(`erro:${res.status}`)
            } else {
                return res.json();
            }
        }
    )

}

const putCheckout = (objeto) => {
    return fetch(`${url}/activities/checkout`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(objeto)

    }).then(
        (res) => {
            if (res.status != 200) {
                console.log(`erro:${res.status}`)
            } else {
                return res.json();
            }
        }
    )
}


const getVeiculo = () => {
    return fetch(`${url}/vehicles`)
        .then(
            (res) => {
                if (res.status != 200) {
                    console.log(`erro:${res.status}`)
                } else {
                    return res.json();
                }
            }
        )
}


const getActivities = () => {
    return fetch(`${url}/activities`)
        .then(
            (res) => {
                if (res.status != 200) {
                    console.log(`erro:${res.status}`)
                } else {
                    return res.json();
                }
            }
        )
}



const deletarVeiculo = (id) => {
    return fetch(`${url}/vehicles/${id}`, {
        method: "DELETE",

    }).then(
        (res) => {
            if (res.status != 200) {
                console.log(`erro:${res.status}`)
            } else {
                return res.json();
            }
        }
    )

}


export const service = {
    postVeiculo,
    getVeiculo,
    putVeiculo,
    deletarVeiculo,
    getActivities,
    postCheckin,
    putCheckout

}