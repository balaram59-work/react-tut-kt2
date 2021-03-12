import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import Header from './components/Header'
import HomeContainer from './containers/HomeContainer';
function App() {
  return (
          <div className="App">
          <HomeContainer/>
          <Header/>
          </div>
    )
}

export default App;
