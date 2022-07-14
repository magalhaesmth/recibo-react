import React from "react";
import './CpfCnpjEmissor.css';

class CpfCnpjEmissor extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="cpfCnpjEmissor">
                <h2>CPF ou CNPJ (Opcional):</h2>
                <input type="text"  name="cpfCnpjEmissor" id="cpfCnpjEmissor" placeholder="Ex: 000.000.000-00"/><br/>
                <p>Somente números</p>
            </div>
        );
    }
}
export default CpfCnpjEmissor;