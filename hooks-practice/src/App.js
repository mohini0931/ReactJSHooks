import "./App.css";
import HookUseSate from "./AllHooks/HookUseState";
import HookUseEffect from "./AllHooks/HookUseEffect";
import HookUseMemo from "./AllHooks/HookUseMemo";
import HookUseContext from "./AllHooks/HookUseContext";
import HookUseReducer from "./AllHooks/HookUseReducer";
import UseFetchApi from "./AllHooks/UseFetchApi";

function App() {
  const { data, loading, error } = UseFetchApi(
    "https://jsonplaceholder.typicode.com/users"
  );
  if (error) return <p>Error!!</p>;
  if (loading) return <p>Loading...</p>;

  return (
    <div className="App">
      {/* <HookUseSate /> */}
      {/* <HookUseEffect /> */}
      {/* <HookUseMemo/> */}
      {/* <HookUseContext/> */}
      {/* <HookUseReducer /> */}
      <ul>
        {data?.map((item) => (
          <li>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
