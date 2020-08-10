import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';


function TeacherItemy() {
    return(
    <article className="teacher-item">
    <header>
        <img src="https://avatars3.githubusercontent.com/u/42755378?s=460&u=e84cee630ae7ded914af71220b75b4e9fcd2ce7a&v=4" alt="Yle Severino Carvalho"/>
        <div>
            <strong>Yle Severino Carvalho</strong>
            <span>Como fazer panquecas</span>
        </div>
    </header>
    <p>
    Entusiasta das melhores panquecas de aveia do mundo.



        <br /> <br />

        Já ensinou mais de 700 mil pessoas a fazer panquecas e consequentemente a serem mais felizes e saudáveis.
    </p>
    <footer>
        <p>
            Preço/hora 
            <strong>R$ 540,00</strong>
        </p>
        <button type="button">
            <img src={whatsappIcon} alt="whatsapp"/>
            entrar em contato
        </button>
    </footer>   
    </article>
    )
}

export default TeacherItemy;