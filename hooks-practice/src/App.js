import './App.css';
import HookUseSate  from "./AllHooks/HookUseState";
import HookUseEffect from "./AllHooks/HookUseEffect";
import HookUseMemo from './AllHooks/HookUseMemo';
import HookUseContext from './AllHooks/HookUseContext';
import HookUseReducer from "./AllHooks/HookUseReducer";

function App() {

  return (
    <div className="App">
    {/* <HookUseSate /> */}
    {/* <HookUseEffect /> */}
    {/* <HookUseMemo/> */}
    {/* <HookUseContext/> */}
    <HookUseReducer />
    </div>
  );
}

export default App;
