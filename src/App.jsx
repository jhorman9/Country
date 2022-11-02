import { useState } from 'react'
import Counter from '../component/Counter';
import Country from '../component/Country';

function App() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="App">
      <button onClick={() => setIsVisible(!isVisible)}>
        Mostrar / ocultar país
      </button>
      {isVisible && <Country />}
      <Counter />
    </div>
  );
}
export default App
