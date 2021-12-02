import mapa from './assets/mapa.png';

import './App.css';

const Contato = () => {
    return (
        <>
            <section className="grid-section contato" id="contato">
                <h1 className="titulo">Contato</h1>
                <div className="mapa">
                    <img src={mapa} alt="Mapa" />
                </div>

                <ul className="dados">
                    <li>contato@origamid.com.br</li>
                    <li>+55 (21) 9999-9999</li>
                    <li>Rua do Conde Miguel,508</li>
                    <li>São Paulo - SP</li>
                </ul>
            </section>
            <footer className="copy">
                <p>Todos os direitos reservados.</p>
            </footer>

        </>
    );
}

export default Contato;
