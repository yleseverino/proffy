import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';
import api from '../../services/apt';

export interface Teacher {
        id: number;
        avatar: string;
        bio: string;
        cost: number;
        name: string;
        subject: string;
        whatsapp: string;
}


interface TeacherItemProps {
    teacher: Teacher;
}



const TeacherItem: React.FC<TeacherItemProps> = ({teacher}) => {

    function createNewConnection() {
        api.post('connections' , {
            user_id: teacher.id,
        })
    }


    return(
    <article className="teacher-item">
    <header>
        <img src={ teacher.avatar} alt="Yle Severino Carvalho"/>
        <div>
        <strong>{teacher.name}</strong>
            <span>{teacher.subject}</span>
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
            <strong>R$ {teacher.cost}</strong>
        </p>
        <a target="_blank" onClick={createNewConnection} href={`https://wa.me/${teacher.whatsapp}`}>
            <img src={whatsappIcon} alt="whatsapp"/>
            entrar em contato
        </a>
    </footer>   
    </article>
    )
}

export default TeacherItem;