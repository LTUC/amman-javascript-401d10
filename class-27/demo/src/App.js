import Form from './components/Form';
import People from './components/People';
import { useState } from 'react';
import Effect from './components/Effect';
function App() {
  const [people, setPeople] = useState([]);
  const [hide, setHide] = useState(false);
  function handleForm(result) {
    setPeople(result);
  }
  return (
    <>
      {!hide && <Effect hide={() => setHide(true)} />}
      <Form prompt="Get Star Wars People" handler={handleForm} />
      <People people={people} />
    </>
  );
}

export default App;
