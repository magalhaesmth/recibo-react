import React from "react";
import './Data.css';

class Data extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="data">
                <h2>Data:</h2>
                <input type="date" name="data" id="data" required/>
                <br/>
            </div>
        );
    }
}
export default Data;