import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import Greet from './components/Greet';
import Statedemo from './components/Statedemo';
import Counter from './components/Counter';
import Binding from './components/Binding';
import ParentComponent from './components/ParentComponent';
import UserGreetings from './components/UserGreetings';
import NameList from './components/NameList';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';
import RefsDemo from './components/RefsDemo';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import PostList from './components/PostList';
import HooksCounter from './hooks/HooksCounter';
import HookCounterTwo from './hooks/HookCounterTwo';
import HookCounterThree from './hooks/HookCounterThree';
import HookMouse from './hooks/HookMouse';

import MouseContainer from './hooks/MouseContainer';


function App() {
  return (
    <div className="App">
      <header className="App-header">
       {/* <Welcome/> */}
       {/* <Greet name="Bruce" heroName="Batman"/>
       <Greet name="Clark" heroName="Superman"/>
       <Greet name="Diana" heroName="Wonder Woman"/>
       <Greet>
        <h3>Inside the Greet Tags</h3>
        <p><button>CLICK</button></p>
       </Greet> */}

       {/* <Statedemo /> */}

       {/* <Counter/> */}
       {/* <Binding/> */}
       {/* <ParentComponent/> */}
       {/* <UserGreetings/> */}
       {/* <NameList/> */}
       {/* <ErrorBoundary>
        <Hero heroName="Iron Man"/>
       </ErrorBoundary>

       <ErrorBoundary>
        <Hero heroName="Superman"/>
       </ErrorBoundary>

       <ErrorBoundary>
        <Hero heroName="Batman"/>
       </ErrorBoundary>

       <ErrorBoundary>
        <Hero heroName="Joker"/>
       </ErrorBoundary> */}
       {/* <RefsDemo/> */}
       {/* <ClickCounter/>
       <HoverCounter/> */}

       {/* <PostList/> */}
       {/* <HooksCounter/> */}
       {/* <HookCounterTwo /> */}
       {/* <HookCounterThree /> */}

       {/* <HookMouse/> */}
       <MouseContainer/>
      </header>
    </div>
  );
}

export default App;
