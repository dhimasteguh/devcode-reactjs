import "./App.css";
import Activity from "./presentation/Activity/Activity";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Todos from "./presentation/Todo/Todos";
import Header from "./components/Header";
import "moment/locale/id";
import moment from "moment";
moment.locale("id");

function App() {
  // return <Activity />;
  return (
    <BrowserRouter>
      <Header />
      <div className="App">
        <Routes>
          <Route path="/" element={<Activity />} />
          <Route path="/detail/:id" element={<Todos />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
