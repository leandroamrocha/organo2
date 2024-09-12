import Banner from './componentes/Banner/Banner.js';
import Formulario from './componentes/Formulario/index.js';
import { useState } from 'react';
import Team from './componentes/Team';

function App() {

  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} />
      <Team nome="Programação" />
      <Team nome="Front-End" />
      <Team nome="Data Science" />
    </div>
  )
}

export default App;
