import "./App.css";
import Menu from "./components/Menu";
import MenuItem from "./components/MenuItem";

function App() {
  return (
    <div className="h-flex">
      <span className="v-flex">
        <span>
          <Menu>
            <MenuItem header="Change view">
              <MenuItem header="Day"></MenuItem>
              <MenuItem header="Week"></MenuItem>
              <MenuItem header="Month"></MenuItem>
            </MenuItem>
          </Menu>
        </span>
        <span>info</span>
      </span>
      <span>calendar</span>
    </div>
  );
}

export default App;
