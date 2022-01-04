import './App.css';
import Carousel from './components/Carousel';
import Flashcards from './widgets/flashcards1.json'

function App() {
  return (
    <main className="flexbox">
        <Carousel
          items={Flashcards.data} />
    </main>
  );
}

export default App;
