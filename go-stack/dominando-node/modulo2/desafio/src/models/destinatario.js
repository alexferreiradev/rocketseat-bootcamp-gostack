import Model from ''

class Destinatario extends Model {
    constructor() {
        this.nome = "";
        this.endereco = {
            rua: "",
            numero: 0,
            complemento: "",
            estado: "GO",
            cidade: "Goiania",
            cep: "74823302"
        }
    }
}