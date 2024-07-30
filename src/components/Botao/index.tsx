import React from 'react';
import style from './Botao.module.scss';

interface IProps {
  children?: React.ReactNode;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
}

function Botao({ onClick, type, children }: IProps) {
  return (
    <button
      className={style.botao}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Botao;