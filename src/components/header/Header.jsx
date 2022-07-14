import React from "react";
import './Header.css';


class Header extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="Header">
                <h1 className="titleHead">Gerador de Recibo Simples</h1>
            </div>
        );
    }
}
export default Header;
