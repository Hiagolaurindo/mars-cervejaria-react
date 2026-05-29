import React from 'react';
import '../styles/Pages.css';

export const About = () => {
  return (
    <div>
      <img className="particulas" src="/particulas.png" alt="particulas" />
      
      <section className="yellow">
        <img className="sol-so" src="/sol.png" alt="sol" />
        <p className="yellow-txt-tt">PILSEN (SOL DA TARDE)</p>
        <p className="yellow-txt">O estilo de cerveja artesanal Pilsen ou Pilsner  <br />
            surgiu na República Tcheca. Como características marcantes, <br />
            a bebida apresenta aroma e sabor acentuados pelo lúpulo, <br />
            além da cor dourada. Seu teor alcoólico varia entre 4,6% e 5% em média. <br />
            As mais famosas são a cerveja de origem Pilsner Urquell <br />
            (primeira Pilsen produzida) e a German Pilsner.</p>
        <img className="yellow-img" src="/MARS BEER SOL DA TARDE.png" alt="soldatarde" /> 
      </section>

      <section className="green"> 
        <p className="green-txt-tt">TRIPEL (FLOREST)</p>
        <p className="green-txt">Criada na Bélgica, no Mosteiro Trapista de <br />
             Westmalle, a cerveja Tripel apresenta cor clara, sabor <br />
             amargo cítrico e aroma frutado. Esse estilo de cerveja artesanal <br />
             é bem carbonatado, o que lhe confere uma espuma bastante cremosa. <br />
             Trata-se de uma cerveja forte, com malte acentuado e teor alcoólico <br />
             em torno de 7,5% e 8,5%.</p>
        <img className="green-img" src="/2 GREEN.png" alt="florest" /> 
        <img width="100%" src="/fundo verde.png" alt="fundo verde" />
      </section>

      <section className="blue">
        <p className="blue-txt-tt">WEIZENBIER (BLUE DARK)</p>
        <p className="blue-txt">O estilo de cerveja Weizenbier, Weissbier ou Weiss <br />
            surgiu na região Sul da Alemanha, mais especificamente na Baviera. <br />
            O estilo apresenta 50% de malte de trigo (no mínimo). Sua cor é <br />
            clara e opaca, com sabor e aroma frutados, lembrando banana e cravo. <br /> 
            A bebida é refrescante, com teor alcóolico moderado (em torno de 5% a 6%).</p>
        <img className="blue-img" src="/2 DARKBLUE.png" alt="blue DARK" /> 
        <img width="100%" src="/fundo azul.png" alt="fundo azul" />
      </section>
    </div>
  );
};
