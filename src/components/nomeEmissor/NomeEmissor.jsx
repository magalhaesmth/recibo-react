import React from "react";
import './NomeEmissor.css';

class NomeEmissor extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="nomeEmissor">
                <h2>Nome do Emissor:</h2>
                <input type="text" name="nomeEmissor" class="input_nomeEmissor" id="nomeEmissor" placeholder="Ex: Frank" required /><br/>
            </div>
        );
    }
}
export default NomeEmissor;