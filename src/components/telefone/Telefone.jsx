import React from "react";
import './Telefone.css';

class Telefone extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="telefone">
                <h2>Telefone (Opcional):</h2>
                <input type="text" name="telefone"  id="telefone" required /><br/>
            </div>
        );
    }
}
export default Telefone;