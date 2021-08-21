import React, { useRef, useEffect } from 'react';
import '../../styles/components/_projects.scss';
import reactChat from '../../assets/images/projects/chatreact-min.jpg';
import citasPets from '../../assets/images/projects/citaspets-min.jpg';
import countdown from '../../assets/images/projects/countdown-min.jpg';
import clima from '../../assets/images/projects/clima-min.jpg';
// import ReactChat from '../../assets/images/projects/chat-react.png';
// import ReactChat from '../../assets/images/projects/chat-react.png';
// import ImageProyect from '../../assets/images/dfg.PNG';
import DesingMobile from '../../assets/images/video-2021-06-03-17-40-40.mp4';

const Projects = () => {
  const titleRef = useRef();
  // const multipleRef = useRef();
  const singleRef = useRef();

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const topTitle = titleRef.current.getBoundingClientRect().top;
      // const topMultiple = multipleRef.current.getBoundingClientRect().top;
      const topSingle = singleRef.current.getBoundingClientRect().top;
      if (topTitle <= 500) {
        titleRef.current.classList.add('show-fade-top');
      }
      // if (topMultiple <= 500) {
      //   multipleRef.current.classList.add('show-fade-bottom');
      // }
      if (topSingle <= 500) {
        singleRef.current.classList.add('show-fade-bottom');
      }
    });
  }, []);
  return (
    <section className='projects'>
      <span ref={titleRef} className='projects__title'>
        Projects
      </span>
      <article className='projects__content'>
        <div
          // ref={multipleRef}
          className='projects__multiple'>
          <div className='projects__multiple-item'>
            <a
              className='projects__link-content'
              target='_blank'
              rel='noopener noreferrer'
              href='https://react-chat-principal.vercel.app/'>
              <figure className='projects__content-images'>
                <img
                  width='400'
                  height='200'
                  loading='lazy'
                  className='projects__image'
                  src={reactChat}
                  alt='react chat project'
                />
              </figure>
              <span className='projects__name-proyect'>Chat React</span>
            </a>
          </div>
          <div className='projects__multiple-item'>
            <a
              target='_blank'
              rel='noopener noreferrer'
              className='projects__link-content'
              href='https://citasdog.netlify.app/'>
              <figure className='projects__content-images'>
                <img
                  width='400'
                  height='200'
                  loading='lazy'
                  className='projects__image'
                  src={citasPets}
                  alt='citas pets project'
                />
              </figure>
              <span className='projects__name-proyect'>Citas Pets</span>
            </a>
          </div>
          <div className='projects__multiple-item'>
            <a
              target='_blank'
              rel='noopener noreferrer'
              className='projects__link-content'
              href='https://sergiocasallas.github.io/Countdown/'>
              <figure className='projects__content-images'>
                <img
                  width='400'
                  height='200'
                  loading='lazy'
                  className='projects__image'
                  src={countdown}
                  alt='countdown project'
                />
              </figure>
              <span className='projects__name-proyect'>CountDown</span>
            </a>
          </div>
          <div className='projects__multiple-item'>
            <a
              target='_blank'
              rel='noopener noreferrer'
              className='projects__link-content'
              href='https://clima-phi.vercel.app/'>
              <figure className='projects__content-images'>
                <img
                  width='400'
                  height='200'
                  loading='lazy'
                  className='projects__image'
                  src={clima}
                  alt='desing proyect'
                />
              </figure>
              <span className='projects__name-proyect'>API-Clima</span>
            </a>
          </div>
        </div>
        <div ref={singleRef} className='projects__single'>
          <div className='projects__single-item'>
            <a
              className='projects__link-content'
              href='https://qr-eight.vercel.app/'>
              <video
                className='projects__single-video'
                autoPlay
                muted
                loop
                src={DesingMobile}></video>
              <span className='projects__name-proyect'>QR</span>
            </a>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Projects;
