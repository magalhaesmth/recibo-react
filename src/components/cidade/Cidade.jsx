import React from "react";
import './Cidade.css';

class Cidade extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="cidade">
                <h2>Cidade:</h2>
                <input type="text" name="cidade" id="cidade" required /><br/>
            </div>
        );
    }
}
export default Cidade;