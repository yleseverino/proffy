import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherIteml() {
    return(
    <article className="teacher-item">
    <header>
        <img src="https://yt3.ggpht.com/a/AATXAJxq5EWtlLMTEtJNKgJ71R1LohlDPLS7Zk_WWIct7g=s100-c-k-c0xffffffff-no-rj-mo" alt="Julia Jordana Zuanazzi"/>
        <div>
            <strong>Júlia Zuanazzi</strong>
            <span>Inglês/Italiano</span>
        </div>
    </header>
    <p>
    Melhor professora de Italiano e Inglês do mundo.



        <br /> <br />

        Ensina Inglês desde da adolescência, além de ser formada em letras pela UFTM morou 1 ano na itália
    </p>
    <footer>
        <p>
            Preço/hora 
            <strong>R$ 890,00</strong>
        </p>
        <button type="button">
            <img src={whatsappIcon} alt="whatsapp"/>
            entrar em contato
        </button>
    </footer>   
    </article>
    )
}

export default TeacherIteml;