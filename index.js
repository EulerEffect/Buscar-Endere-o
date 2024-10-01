function verificar() {
    let cep = document.getElementById("cep").value




    const ajax = new XMLHttpRequest();
    ajax.open('GET', 'https://viacep.com.br/ws/' + cep + '/json')
    ajax.send();

    ajax.onload = function () {
        document.getElementById("area").innerHTML = this.responseText;

        //transmformando texto em objeto
        let objeto = JSON.parse(this.responseText);

        //valores que eu desejei por no site
        let rua = objeto.logradouro;
        let cidade = objeto.localidade;
        let estado = objeto.uf;

        document.getElementById('area').innerHTML =
            "Rua: " + rua +
            "<br>Cidade: " + cidade +
            "<br>Estado: " + estado;
    }
};
