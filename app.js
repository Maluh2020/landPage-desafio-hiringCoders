class Lead {

    constructor (nome, email, tel){
        this.nome = nome;
        this.email = email;
        this.tel = tel;
    }

}

class BD {

    constructor (){
        let id = localStorage.getItem('id');
        if(id === null){
            localStorage.setItem('id', 0);
        }
    }


    getProximoId(){
        let proximoId = localStorage.getItem('id');
        return parseInt(proximoId) + 1;
    }

    gravar(ld){
        let id = this.getProximoId();
        localStorage.setItem(id, JSON.stringify(ld));

        localStorage.setItem('id', id);
    }

}

let bd = new BD();

function cadastrarLead(){
    let nome = document.getElementById('nome');
    let email = document.getElementById('email');
    let tel = document.getElementById('tel');

    let lead = new Lead(
        nome.value, email.value, tel.value
    );

    bd.gravar(lead);
}

