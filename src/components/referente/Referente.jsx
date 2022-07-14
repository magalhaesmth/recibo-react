import React from "react";
import './Referente.css';

class Referente extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="referente">
                <h2>Referente à:</h2>
                <input type="text" name="referente" id="referente"/><br/>
            </div>
        );
    }
}
export default Referente;