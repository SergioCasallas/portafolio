import React, { useRef, useEffect } from 'react';
import '../../styles/components/_contact.scss';
// eslint-disable-next-line
import { useForm, ValidationError } from '@formspree/react';
// https://formspree.io/f/xrgrqnka

const Contact = () => {
  const formRef = useRef();
  const titleRef = useRef();
  const infoRef = useRef();

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const topForm = formRef.current.getBoundingClientRect().top;
      const topTitle = titleRef.current.getBoundingClientRect().top;
      const topInfo = infoRef.current.getBoundingClientRect().top;
      if (topForm <= 500) {
        formRef.current.classList.add('show-fade-left');
      }

      if (topTitle <= 500) {
        titleRef.current.classList.add('show-fade-up');
      }

      if (topInfo <= 500) {
        infoRef.current.classList.add('show-fade-right');
      }
    });
  }, []);
  const [state, submitEmail] = useForm('xrgrqnka');
  if (state.succeeded) {
    if (formRef.current) {
      formRef.current.reset();
    }
    // return;
  }

  return (
    <section className='contact'>
      <span ref={titleRef} className='contact__title'>
        Contact
      </span>
      <div className='contact__form-body'>
        <form ref={formRef} onSubmit={submitEmail} className='contact__form'>
          <div className='contact__form-name contact__form-div'>
            <input
              name='firtsName'
              className='contact__form-input'
              type='text'
              required
            />
            <label htmlFor='firtsName' className='contact__form-label'>
              FIRST NAME*
            </label>
          </div>
          <div className='contact__form-surname contact__form-div'>
            <input
              name='lastName'
              className='contact__form-input'
              type='text'
              required
            />
            <label htmlFor='lastName' className='contact__form-label'>
              LAST NAME*
            </label>
          </div>
          <div className='contact__form-email contact__form-div'>
            <input
              name='email'
              className='contact__form-input-email'
              type='email'
              required
            />
            <label htmlFor='email' className='contact__form-label'>
              EMAIL ADDRESS*
            </label>
          </div>
          <div className='contact__form-phone contact__form-div'>
            <input
              name='phone'
              className='contact__form-input'
              type='number'
              required
            />
            <label htmlFor='phone' className='contact__form-label'>
              PHONE NUMBER*
            </label>
          </div>
          <div className='contact__form-textarea contact__form-div'>
            <input
              name='comments'
              className='contact__form-input'
              type='text'
              required
            />
            <label htmlFor='comments' className='contact__form-label'>
              COMMENTS (Optional)
            </label>
          </div>
          <button type='submit' className='contact__form-button'>
            <span className='contact__form-span'>Submit</span>
            <i
              className='
            contact__icon-arrow
            fas fa-arrow-right'></i>
          </button>
        </form>
        <div ref={infoRef} className='contact__info'>
          <span className='contact__subtitle'>Sergio Casallas</span>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://www.google.com/maps/place/Bonanza,+Engativ%C3%A1,+Bogot%C3%A1/@4.6895779,-74.0939344,16z/data=!3m1!4b1!4m5!3m4!1s0x8e3f9b3cd83dc501:0x3711d6966928af95!8m2!3d4.6907459!4d-74.090226'
            className='contact__link-location'>
            <i className='contact__icon-location fas fa-map-marker-alt'></i>
            <span className='contact__location'>
              Engativa,Bogota D.C, Colombia
            </span>
          </a>
          <a href='tel:+57 3203263852' className='contact__link-phone'>
            <i className='contact__icon-phone fas fa-phone-alt'></i>
            <span className='contact__phone'>+57 3203263852</span>
          </a>
          <span
            disabled
            className='contact__link-email'
            // href='mailto:sergiocasallas01@gmail.com'
          >
            <i className='contact__icon-email far fa-envelope'></i>
            <span className='contact__email'>sergiocasallas01@gmail.com</span>
          </span>
          <div className='contact__social'>
            <a
              href='https://wa.link/fpzvwn'
              rel='noopener noreferrer'
              target='_blank'
              className='contact__link-whatsapp'>
              <i className='contact__icon-social fab fa-whatsapp'></i>
            </a>
            <a
              target='_blank'
              className='contact__link-telegram'
              rel='noopener noreferrer'
              href='https://t.me/SergioCasallas'>
              <i className='contact__icon-social fab fa-telegram-plane'></i>
            </a>
            <a
              target='_blank'
              className='contact__link-linkedin'
              rel='noopener noreferrer'
              href='https://www.linkedin.com/in/sergio-casallas/'>
              <i className='contact__icon-social fab fa-linkedin-in'></i>
            </a>
            <a
              target='_blank'
              className='contact__link-github'
              rel='noopener noreferrer'
              href='https://github.com/SergioCasallas'>
              <i className='contact__icon-social fab fa-github'></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
