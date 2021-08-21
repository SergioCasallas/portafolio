import React, { useRef, useEffect } from 'react';
import '../../styles/components/_inicio.scss';
import ImagePresentacion from '../../assets/images/sergiocasallas.jpg';
import '../../styles/components/_aboutme.scss';

const Aboutme = () => {
  const imagenRef = useRef();
  const textContentRef = useRef();


  useEffect(() => {
    window.addEventListener('scroll', () => {
      const topTextContent = textContentRef.current.getBoundingClientRect().top;
      const topImagen = imagenRef.current.getBoundingClientRect().top;
      if (topTextContent <= 500) {
        // console.log('sexoAnal');
        textContentRef.current.classList.add('show-fade-up');
      }
      if (topImagen <= 500) {
        imagenRef.current.classList.add('show-fade-bottom');
      }
    });
  }, [imagenRef, textContentRef]);


  return (
    <section className='aboutme'>
      <figure className='aboutme__content-images'>
        <img
          ref={imagenRef}
          className='aboutme__image'
          src={ImagePresentacion}
          alt='ImagePresentacion'
        />
      </figure>
      <div className='aboutme__content-text' ref={textContentRef}>
        <span className='aboutme__title'>About me</span>
        <p className='aboutme__description'>
           Extensive knowledge as a Fron-end Developer, in search of innovation and job innovation and job growth.
        </p>
      </div>
    </section>
  );
};

export default Aboutme;
