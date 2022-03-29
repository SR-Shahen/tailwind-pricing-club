import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Priceing from './Components/Priceing/Priceing';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Header></Header>
      <h1 className='text-6xl m-4'>Welcome to my pricing club
      </h1>
      <Priceing></Priceing>
    </div>
  );
}

export default App;
