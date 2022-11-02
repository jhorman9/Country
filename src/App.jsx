import { useState } from 'react'
import Counter from '../component/Counter';
import Country from '../component/Country';
import '../src/App.css'

function App() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="App">
      <button onClick={() => setIsVisible(!isVisible)}>
        Mostrar / ocultar país
      </button>
      {isVisible && <Country />}
    <div className="Counter">
      <Counter />
    </div>
    </div>
  );
}
export default App
