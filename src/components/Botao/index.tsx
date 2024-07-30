import React from 'react';
import style from './Botao.module.scss';
import IProps from './IProps';

class Botao extends React.Component<IProps>{
  render() {
    const {type = "button"} = this.props;
    return (
      <button className={style.botao} type={type}>
        {this.props.children}
      </button>
    )
  }
}

export default Botao;