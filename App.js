import React, { useEffect, useState } from 'react';
import './index.css';
import Boton from './Boton';

export default function App() {
  const [modoOscuro, setModoOscuro] = useState(false);

  useEffect(() => {
    document.body.className = modoOscuro ? 'dark-mode' : 'light-mode';
  }, [modoOscuro]);

  return (
    <div className="container">
      <Boton activo={modoOscuro} onToggle={() => setModoOscuro(v => !v)} />
      <h1>Bienvenido</h1>
      <input
        type="text"
        className="input-bar"
        placeholder="Escribe algo aquí..."
      />
    </div>
  );
}
