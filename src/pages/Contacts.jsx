import React from 'react';
import '../styles/Pages.css';

export const Contacts = () => {
  return (
    <div>
      <img className="particulas" src="/particulas.png" alt="particulas" />
      
      <br /><br /><br /><br />
      <iframe 
        className="mapa" 
        src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d61415.35107865831!2d-48.10150281774389!3d-15.832431940589649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e2!4m0!4m5!1s0x935a3321354999e9%3A0x881fa531a22a3f88!2sSt.%20B%20Norte%20Centro%20Universit%C3%A1rio%20Proje%C3%A7%C3%A3o%20-%20Taguatinga%20-%20Taguatinga%2C%20Bras%C3%ADlia%20-%20DF%2C%2070297-400!3m2!1d-15.8193551!2d-48.0652797!5e0!3m2!1spt-BR!2sbr!4v1667759768794!5m2!1spt-BR!2sbr" 
        width="600" 
        height="450" 
        style={{border:0}} 
        allowFullScreen="" 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade">
      </iframe>

      <div className="icones">
        <a href="https://www.instagram.com/_marsdesigner/">
          <img className="instagram" src="/INSTA.svg" alt="instagram" />
        </a>
        <a href="https://whatsa.me/5561983731359">
          <img className="whatsapp" src="/WHATSAPP.svg" alt="whatsapp" />
        </a>
      </div>

      <section className="text-cont">
        <a className="instawpp" href="https://www.instagram.com/seuinstagram/">INSTAGRAM<br /><br /></a> 
        <a className="instawpp" href="https://whatsa.me/5561seucelular">WHATSAPP</a> 
      </section>
    </div>
  );
};
