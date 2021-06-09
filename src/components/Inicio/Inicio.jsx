import React from 'react';
import '../../styles/components/_inicio.scss';
import ImagePresentacion from '../../assets/images/sergio2.jpg';
import '../../styles/components/_inicio.scss';

const Inicio = () => {
  return (
    <section className='inicio'>
      <figure className='inicio__content-images'>
        <img
          className='inicio__image'
          src={ImagePresentacion}
          alt='ImagePresentacion'
        />
      </figure>
      <span className='inicio__introduction-phrase'>
        Hello! I’m Sergio,
        <br />a Frontend Developer
      </span>
    </section>
  );
};

export default Inicio;
