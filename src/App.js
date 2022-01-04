import './App.css';
import Carousel from './components/Carousel';
// import { Data } from './components/Data';
import Test from './widgets/test.json'

function App() {
  return (
    <main className="flexbox">
        {/* <Carousel
          items={Data} /> */}
        <Carousel
          items={Test.data} />
          {/* {console.log(Test.data)} */}
    </main>
  );
}

export default App;
