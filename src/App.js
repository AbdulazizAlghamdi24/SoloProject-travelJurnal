
import './App.css';

import Card from './Component/Card.js'
import Header from './Component/Header.js';
import data from './Component/data.js';


function App() {

  const dataEl = data.map((item)=>{
    return <Card
            key = {item.title}
            {...item}
    />

  })
  return (
    <div className="App">
     <Header/>
     {dataEl}
    </div>
  );
}

export default App;
