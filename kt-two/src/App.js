import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import Header from './components/Header'
import HomeContainer from './containers/HomeContainer';
import HeaderContainer from './containers/HeaderContainer';
function App() {
  return (
          <div className="App">
          <HomeContainer/>
          <HeaderContainer/>
          </div>
    )
}

export default App;
