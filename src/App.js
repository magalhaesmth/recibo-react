
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Valor from './components/valor/Valor';
import NomePagador from './components/nomePagador/NomePagador';
import CpfCnpjPagador from './components/cpfCnpjPagador/CpfCnpjPagador';
import Referente from './components/referente/Referente';
import Cidade from './components/cidade/Cidade';
import Data from './components/data/Data';
import NomeEmissor from './components/nomeEmissor/NomeEmissor';
import Telefone from './components/telefone/Telefone';
import CpfCnpjEmissor from './components/cpfCnpjEmissor/CpfCnpjEmissor';
import FormasPagamento from './components/formasPagamento/FormasPagamento';
import DuasVias from './components/duasVias/DuasVias';

function App() {
  return (

    <body>
    <div class="box">
      <form onSubmit="imprimir()" method="post" id="1">
        <Header nome="Recibo Simples" />
        <Footer/>
        
        <label>
          <Valor/>
        </label>

        <label>
          <NomePagador/>
        </label>

        <label>
          <CpfCnpjPagador/>
        </label>

        <label>
          <Referente/>
        </label>

        <label>
            <div class="row">
              <div class="column"><Cidade/></div>
              <div class="column"><Data/></div>
            </div>
        </label>

        <label>
          <NomeEmissor />
        </label>

        <label>
            <div class="row">
              <div class="column"><Telefone /></div>
              <div class="column"><CpfCnpjEmissor/></div>
            </div>
        </label>

        <label>
          <FormasPagamento />
        </label>

        <label>
          <DuasVias />
        </label>

          <label>
            <p>
              <input type="hidden" name="gerarRecibo" />
              <button type="submit" class="submit">
                <span>Gerar Recibo</span>
              </button>
            </p>
          </label>

     </form>
    </div>
    </body>
  )
}
export default App;
