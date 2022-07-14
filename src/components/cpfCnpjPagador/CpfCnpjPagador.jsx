import React from "react";
import './CpfCnpjPagador.css';

class CpfCnpjPagador extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="cpfCnpjPagador">
                <h2>CPF ou CNPJ (Opcional):</h2>
                <input type="text"  name="cpfCnpjPagador" id="cpfCnpjPagador" placeholder="Ex: 000.000.000-00"/><br/>
                <p>Somente números</p>
            </div>
        );
    }
}
export default CpfCnpjPagador;