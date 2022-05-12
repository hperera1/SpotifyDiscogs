import logo from "./gabe.png";
import { Outlet, Link } from "react-router-dom";

function App() {
  return (
    <div className="md:grid md:grid-cols-3 md:gap-6">
      <div className="md:col-span-1">
        <div className="px-4 sm:px-4">
          <h1 className="text-3xl font-bold underline">
            Gabe!
          <a
            href="https://www.dota2.com/home"
            target="_blank"
            rel="noreferrer"
          >
            <img src={logo} width="150" height="150" alt="dota2.com/home" />
          </a>
          </h1>
        </div>
      </div>
      <div className="mt-5 md:mt-0 md:col-span-1">
        <Link to="/" className="text-3xl font-bold underline">Todo List</Link>
        <div className="flex space-x-2">
          <Link to="/create" className="nav-link">Create</Link>
          <Link to="/edit" className="nav-link">Edit</Link>
        </div>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
