import './App.css';
import Carousel from './components/Carousel';
import { Data } from './components/Data';

function App() {
  return (
    <main className="flexbox">
        <Carousel
          items={Data} />
    </main>
  );
}

export default App;
