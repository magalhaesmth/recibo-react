import React from "react";
import './Valor.css';

class Valor extends React.Component {

    constructor(props) {
        super(props);
        this.state = { valor: "" }
            
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);      
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        let valor = this.state.valor;
        this.setState({
            valor: valor
        }
    )};

    render() {
        return (
            <div class="valor">
                <form onSubmit={this.handleSubmit}>
                <h2>Valor:</h2>
                    <input type="number" class="input_valor" name="valor" id="valor" placeholder="Ex: 1500,00" value={this.state.input_valor} onChange={this.handleChange} required/><br/>
                <p>Valor Recebido</p>
                </form>
            </div>
        );
    }
}
export default Valor;
