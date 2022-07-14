import React from "react";
import './Footer.css';

class Footer extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="Footer">
                <p>by: Matheus Magalhães Urbano</p>
            </div>
        );
    }
}
export default Footer;