import React from "react";
import "./styles.css";

interface Item {
  nome: string;
  link: string;
}

interface PropsLista {
  titulo: string;
  itens: Item[];
}

const Lista: React.FC<PropsLista> = ({ titulo, itens }) => {
  return (
    <div className='container-lista'>
      <dl>
        <dt>{titulo}</dt>

        {itens.map((item) => (
          <dd>
            <a href={item.link}>{item.nome}</a>
          </dd>
        ))}
      </dl>
    </div>
  );
};

export default Lista;
