import React, { useRef, useEffect } from 'react';
import '../../styles/components/_projects.scss';
import ImageProyect from '../../assets/images/dfg.PNG';
import DesingMobile from '../../assets/images/video_2021-06-03_17-40-40.mp4';

const Projects = () => {
  const titleRef = useRef();
  const multipleRef = useRef();
  const singleRef = useRef();

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const topTitle = titleRef.current.getBoundingClientRect().top;
      const topMultiple = multipleRef.current.getBoundingClientRect().top;
      const topSingle = singleRef.current.getBoundingClientRect().top;
      if (topTitle <= 500) {
        titleRef.current.classList.add('show-fade-top');
      }
      if (topMultiple <= 500) {
        multipleRef.current.classList.add('show-fade-left');
      }
      if (topSingle <= 500) {
        singleRef.current.classList.add('show-fade-right');
      }
    });
  }, []);
  return (
    <section className='projects' >
      <span ref={titleRef} className='projects__title'>
        Projects
      </span>
      <article className='projects__content'>
        <div ref={multipleRef} className='projects__multiple'>
          <div className='projects__multiple-item'>
            <a className='projects__link-content' href='/'>
              <figure className='projects__content-images'>
                <img className='projects__image' src={ImageProyect} alt='' />
              </figure>
              <span className='projects__name-proyect'>CountDown</span>
            </a>
          </div>
          <div className='projects__multiple-item'>
            <a className='projects__link-content' href='/'>
              <figure className='projects__content-images'>
                <img className='projects__image' src={ImageProyect} alt='' />
              </figure>
              <span className='projects__name-proyect'>CountDown</span>
            </a>
          </div>
          <div className='projects__multiple-item'>
            <a className='projects__link-content' href='/'>
              <figure className='projects__content-images'>
                <img className='projects__image' src={ImageProyect} alt='' />
              </figure>
              <span className='projects__name-proyect'>CountDown</span>
            </a>
          </div>
          <div className='projects__multiple-item'>
            <a className='projects__link-content' href='/'>
              <figure className='projects__content-images'>
                <img className='projects__image' src={ImageProyect} alt='' />
              </figure>
              <span className='projects__name-proyect'>CountDown</span>
            </a>
          </div>
        </div>
        <div ref={singleRef} className='projects__single'>
          <div className='projects__single-item'>
            <a className='projects__link-content' href='/'>
              <video
                className='projects__single-video'
                autoPlay
                muted
                loop
                src={DesingMobile}></video>
              <span className='projects__name-proyect'>CountDown</span>
            </a>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Projects;
