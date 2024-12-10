import './App.css';
import Footer from './components/footer';
import Hero from './components/hero';
import SecOne from './components/secOne';
import SecThree from './components/secThree';
import SecTwo from './components/secTwo';

function App() {
  return (
    <div className="App">
      <Hero />
      <SecOne />
      <SecTwo />
      <SecThree />
      <Footer />
    </div>
  );
}

export default App;
