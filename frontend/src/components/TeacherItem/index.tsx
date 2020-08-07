import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars1.githubusercontent.com/u/47197695?s=460&u=2e7491adf00d02183572824bb43115820a04dfcc&v=4"
          alt="Hiago Pratess"
        />

        <div>
          <strong>Hiago Prates</strong>
          <span>Matematica</span>
        </div>
      </header>

      <p>
        Dev Fullstack e Estudante de Sistemas de Informação. Apaixonado por
        Javascript || ReactJS || React Native || NodeJS.
        <br />
        <br />
        Dev Fullstack e Estudante de Sistemas de Informação. Apaixonado por
        Javascript || ReactJS || React Native || NodeJS.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 200,00</strong>
        </p>

        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
};

export default TeacherItem;
