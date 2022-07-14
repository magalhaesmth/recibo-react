import React from "react";
import './NomePagador.css';

class NomePagador extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="nomePagador">
                <h2>Nome do Pagador:</h2>
                <input type="text" name="nomePagador" class="input_nomePagador" id="nomePagador" placeholder="Ex: Matheus Magalhães" required /><br/>
            </div>
        );
    }
}
export default NomePagador;