import React from 'react';
import { Music } from '../Music/Music';
import './CalificacionEstrellas.css';

const CalificacionPorEstrellas = ({ valor }) => {
    const maxEstrellas = 5;
    const estrellas = [];
  
    const estrellasLlenas = Math.round((valor / 100) * maxEstrellas); // Cantidad de estrellas llenas según el valor
  
    for (let i = 0; i < maxEstrellas; i++) {
      let claseEstrella = 'estrella-vacia';
  
      if (i < estrellasLlenas) {
        claseEstrella = 'estrella-llena';
      } else if (i === estrellasLlenas && valor % 1 !== 0) {
        claseEstrella = 'estrella-media';
      }
  
      estrellas.push(<span key={i} className={`estrella ${claseEstrella}`}>&#9733;</span>);
    }
  
    return (
      <div className="calificacion-estrellas">
        {estrellas}
      </div>
    );
  };
  
  export default CalificacionPorEstrellas;