import './index.css';
import ReactDOM from 'react-dom/client';
import App from './App';
import TodosList from "./components/todos-list";
import EditTodo from "./components/edit-todo";
import CreateTodo from "./components/create-todo";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root')
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
        <Route path='create' element={<CreateTodo />}/>
        <Route path='edit' element={<EditTodo />}/>
      </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
