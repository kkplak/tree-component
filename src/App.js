import logo from './logo.svg';
import './App.css';
import Tree from './Tree';
import { treeData } from './treeData';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Tree data={treeData} />    
    </div>
    
  );
}

export default App;
