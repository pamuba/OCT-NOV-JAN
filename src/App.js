import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import Greet from './components/Greet';


function App() {
  return (
    <div className="App">
      <header className="App-header">
       {/* <Welcome/> */}
       <Greet name="Bruce" heroName="Batman"/>
       <Greet name="Clark" heroName="Superman"/>
       <Greet name="Diana" heroName="Wonder Woman"/>
       <Greet>
        <h3>Inside the Greet Tags</h3>
        <p><button>CLICK</button></p>
       </Greet>
      </header>
    </div>
  );
}

export default App;
