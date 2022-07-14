import React from "react";
import './FormasPagamento.css';

class FormasPagamento extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="FormasPagamento" class="formasPagamento">
                <h2>Selecione a forma de Pagamento:</h2>
                <div class="selecao">
                    <label class="radio">
                        <input type="radio" name="pagamento" value="dinheiro" id="botaoDinheiro" onchange="menuPagamento" checked/>    
                        Dinheiro
                    </label>
                    <label class="radio">
                        <input type="radio" name="pagamento" value="pix" id="botaoPix" onchange="menuPagamento"/>      
                        Pix
                    </label>
                    <label class="radio">
                        <input type="radio" name="pagamento" value="cheque" id="botaoCheque" onchange="menuPagamento"/>     
                        Cheque
                    </label>
                    <label class="radio">
                        <input type="radio" name="pagamento" value="deposito" id="botaoDeposito" onchange="menuPagamento"/>     
                        Transferência/Depósito
                    </label>
                    <label class="radio">
                        <input type="radio" name="pagamento" value="cartao" id="botaoCartao" onchange="menuPagamento"/>
                        Cartão de Crédito/Débito
                    </label>
                </div>
            </div>

        );
    }
}
export default FormasPagamento;