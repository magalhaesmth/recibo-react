import React from "react";
import './DuasVias.css';

class DuasVias extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="DuasVias" class="duasVias">
                <h2>Duas Vias?</h2>
                <div class="selecao">
                <label class="checkbox">
                    <input type="checkbox" name="duasVias" id="duasVias"/>
                    Sim
                </label>
                <label class="checkbox">
                    <input type="checkbox" name="duasVias" id="duasVias"/>
                    Não
                </label>
                </div>
            </div>

        );
    }
}
export default DuasVias;