import React, { useRef, useEffect } from 'react';
import '../../styles/components/_inicio.scss';
import ImagePresentacion from '../../assets/images/sergiocasallas.jpg';
import '../../styles/components/_aboutme.scss';

const Aboutme = () => {
  const imagenRef = useRef();
  const textContentRef = useRef();

  // useLayoutEffect(() => {
  //   const topTextContent = textContentRef.current.getBoundingClientRect().top;
  //   console.log(topTextContent);
  //   // if(topImagen<=){}
  //   window.addEventListener('scroll', () => {
  //     console.log(topTextContent);
  //     if (topTextContent === 0) {
  //       console.log('sexoAnal');
  //     }
  //   });
  //   // console.log(window.scrollY);
  // }, []);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const topTextContent = textContentRef.current.getBoundingClientRect().top;
      const topImagen = imagenRef.current.getBoundingClientRect().top;
      console.log(topTextContent);
      if (topTextContent <= 500) {
        console.log('sexoAnal');
        textContentRef.current.classList.add('show-fade-up');
      }
      if (topImagen <= 500) {
        imagenRef.current.classList.add('show-fade-bottom');
      }
      // console.log(topTextContent);
    });
    // console.log(window.scrollY);
  }, [ imagenRef, textContentRef]);

  const scrollY = () => {
    console.log('scrollY');
  };

  return (
    <section className='aboutme' onScroll={scrollY}>
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
          Amplios conocimientos como Fron-end Developer, en busca de la
          innovacion y el crecimiento laboral.
        </p>
      </div>
    </section>
  );
};

export default Aboutme;
