
import Footer from '../footer/Footer';
import Header from '../header/Header';
import Main from '../main/Main';
import './app.css';

function App() {
  return (
    <div className='app'>
      <Header />
      <div className='app-right'>
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;
