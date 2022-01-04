import './App.css';
import './css/Card.css';
import Carousel from './components/Carousel';
import { Data } from './components/Data';

function App() {
  return (
    <main className="flashcard-main-container">
        <Carousel
          items={Data} />
    </main>
  );
}

export default App;
