import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
// import Footer from './Components/Footer';

function App() {
  return (
    <>
      <div className="App">
        <Header></Header>
        <Home></Home>
      </div>
      {/* <Footer></Footer> */}
    </>
  );
}

export default App;
