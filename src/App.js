
import './App.css';
import Header from './Compoents/Header';
import Interest from './Compoents/Interest';
import Main from './Compoents/Main';
import Footer from  './Compoents/Footer';

function App() {
  return (
    <div className="flex-container">
      <Header/>
      <Main />
      <Interest />
      <Footer />
    </div>
  );
}

export default App;
