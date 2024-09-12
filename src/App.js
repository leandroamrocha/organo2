import Banner from './componentes/Banner/Banner.js';
import Formulario from './componentes/Formulario/index.js';
import { useState } from 'react';

function App() {

  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorCadastrado = (colaborador) => {
    console.log(colaborador);
    setColaboradores([...colaboradores, colaborador]) 
   }

  return (
    <div>
      <Banner />
      <Formulario aoColaboradorCadastrado={colaborador => aoNovoColaboradorCadastrado(colaborador)} />
    </div>
  );
}

export default App;
