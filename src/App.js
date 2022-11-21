import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./components/Menu.js";
import Login from "./components/Login.js";
import Register from "./components/Register.js";
import Story from "./components/Story.js";
import Choice1 from "./components/Choices/Choice1.js";
import Death1 from "./components/Deaths/Death1.js";
import Death2 from "./components/Deaths/Death2.js";
import Death3 from "./components/Deaths/Death3.js";
import Choice2 from "./components/Choices/Choice2.js";
import Choice3 from "./components/Choices/Choice3.js";
import PrivateRoute from "./components/PrivateRoute.js";
import User from "./components/User.js";




function App() {
  return (
    <BrowserRouter>
    
    <div className="container">
      <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Register" exact element={<Register />} />
          <Route path="/Menu" exact element={<Menu />} />
          <Route path="/Story" exact element={<Story />} />
          <Route path="/Choice1" exact element={<Choice1 />} />
          <Route path="/Death1" exact element={<Death1 />} />
          <Route path="/Choice2" exact element={<Choice2 />} />
          <Route path="/Death2" exact element={<Death2 />} />
          <Route path="/Choice3" exact element={<Choice3 />} />
          <Route path="/Death3" exact element={<Death3 />} />
          


          <Route path="/User" exact element={<PrivateRoute><User /></PrivateRoute>}/>




        </Routes>
      
      </div>
      </BrowserRouter>
  )
}

export default App;

