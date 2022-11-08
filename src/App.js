import './App.css';
import Header from './Components/Header/Header';
import Card from './Components/Card/Card';
import Apis from './Components/api json/MOCK_DATA.json'

function App() {
  return (
    <div>
      <header>
        <Header></Header>
        <Card api={Apis.map(ap => ap)}></Card>
      </header>
    </div>
  );
}

export default App;
