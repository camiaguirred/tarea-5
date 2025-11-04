import React from 'react';

export default function Boton({ activo, onToggle }) {
  return (
    <button className="toggle-btn" onClick={onToggle}>
      {activo ? 'Visión Diurna' : 'Visión Nocturna'}
    </button>
  );
}
