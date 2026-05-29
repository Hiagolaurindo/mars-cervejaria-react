import React from 'react';
import '../styles/Pages.css';

export const Home = () => {
  return (
    <div>
      <img className="particulas" src="/particulas.png" alt="particulas" />
      <img className="sol" width="10%" src="/sol.png" alt="sol" />
      
      <section className="inicio">
        <img className="inicio-img" src="/logobranca.svg" alt="logomars" />
        <p className="inicio-txt">
          A CADA  

          GOLE   

          UMA SENSAÇÃO   

          ÚNICA   

        </p> 
        <img className="cervejas" src="/3 MARS BEER.png" alt="cervejasmars" />
      </section>
      
      <hr />
      
      <footer className="text-fot">
        Criado e desenvolvido por Mars Design Gráfico @
      </footer>
    </div>
  );
};
