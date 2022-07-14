import React from "react";
import './CpfCnpjEmissor.css';

class CpfCnpjEmissor extends React.Component {

    constructor(props) {
        super(props);
        this.state = { cpfCnpjEmissor: "" }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        let cpfCnpjEmissor = this.state.cpfCnpjEmissor;
        this.setState({
            cpfCnpjEmissor: cpfCnpjEmissor
        }
        )
    };

    render() {
        return (
            <div class="cpfCnpjEmissor">
                <h2>CPF ou CNPJ (Opcional):</h2>
                <input type="text" name="cpfCnpjEmissor" class="input_cpfCnpjEmissor" id="cpfCnpjEmissor" placeholder="Ex: 000.000.000-00" value={this.state.input_cpfCnpjEmissor} onChange={this.handleChange} required/><br/>
                <p>Somente números</p>
            </div>
        );
    }
}
export default CpfCnpjEmissor;
