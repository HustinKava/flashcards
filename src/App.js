import './App.css';
import './css/Card.css';
import Carousel from './components/Carousel';
import Flashcards from './widgets/flashcards1.json'

function App() {
  return (
    <main className="flashcard-main-container">
        <Carousel
          instruction={Flashcards.instruction}
          items={Flashcards.data} />
    </main>
  );
}

export default App;
