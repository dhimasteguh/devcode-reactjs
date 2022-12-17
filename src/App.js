import "./App.css";
import Activity from "./presentation/Activity/Activity";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import "moment/locale/id";
import moment from "moment";
import Todo from "./presentation/Todo/Todo";
moment.locale("id");

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Activity />} />
        <Route path="/detail/:id" element={<Todo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
