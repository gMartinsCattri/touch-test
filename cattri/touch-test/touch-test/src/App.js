import React, { useEffect } from 'react';
import './App.css'

function App() {
  useEffect(() => {
    let timeoutId = null;

    const handleTouchStart = () => {
      console.log('Usuário tocou na tela');

      // Cancela o temporizador anterior, se houver
      clearTimeout(timeoutId);

      // Define um novo temporizador
      timeoutId = setTimeout(() => {
        console.log('Usuário não interagiu');
      }, 15000);
    };

    document.addEventListener('touchstart', handleTouchStart);

    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className='container-touch'>
      <p>Touch Test</p>
    </div>
  );
}

export default App;
