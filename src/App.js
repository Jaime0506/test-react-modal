import { useState, useEffect } from 'react'
import Modal from './Modal'

import './App.css';

function App() {

  const [windowHeight, setWindowHeight] = useState({})
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const height =  window.innerHeight

    setWindowHeight({
      height,
    })
  }, [])
  
  const toggleModal = () => {
    setIsVisible(!isVisible)
  }

  return (
    <div className="App" style={ windowHeight }>
      <button onClick={ toggleModal }>😈😳</button>


    

      <Modal
        isOpen={isVisible}
      >
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore distinctio commodi adipisci, libero odit quis voluptatibus voluptatem accusantium laudantium perspiciatis mollitia quasi facilis dicta aperiam. Ducimus, id pariatur. Repellat, dolorum?</h1>
        <code>Mama Huevo 😈</code>
        <button onClick={ toggleModal }>Cerrar</button>
      </Modal>
    </div>
  );
}

export default App;
