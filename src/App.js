import { useState } from 'react';
import ImageGrid from './Components/imageGrid';
import Modal from './Components/Modal';
import Title from './Components/Title';
import UploadFile from './Components/UploadFIle';


function App() {

  const [selected, setselected] = useState(null);
  return (
    <div className="App">
      <Title></Title>
      <UploadFile></UploadFile>
      <ImageGrid setselected={setselected}></ImageGrid>
      { selected && <Modal selected={selected} setselected={setselected}></Modal>}
    </div>
  );
}

export default App;
