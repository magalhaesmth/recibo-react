import React from "react";
import './Valor.css';

class Valor extends React.Component {

    constructor(props) {
        super(props);         
    }

    render() {
        return (
            <div class="valor">
                <h2>Valor:</h2>
                <input type="number" class="input_valor" name="valor" id="valor" placeholder="Ex: 1500,00" required /><br/>
                <p>Valor Recebido</p>
            </div>
        );
    }
}
export default Valor;