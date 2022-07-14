import React from "react";
import './NomePagador.css';

class NomePagador extends React.Component {

    constructor(props) {
        super(props);
        this.state = { nomePagador: "" }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        let nomePagador = this.state.nomePagador;
        this.setState({
            nomePagador: nomePagador
        }
        )
    };
    render() {
        return (
            <div class="nomePagador">
                <h2>Nome do Pagador:</h2>
                <input type="text" name="nomePagador" class="input_nomePagador" id="nomePagador" placeholder="Ex: Matheus Magalhães" value={this.state.input_nomePagador} onChange={this.handleChange} required /><br/>
            </div>
        );
    }
}
export default NomePagador;
