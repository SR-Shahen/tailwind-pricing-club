import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Header></Header>
      <h1 className='text-9xl'>Welcome to my pricing club
      </h1>
    </div>
  );
}

export default App;
