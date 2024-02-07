import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import Home from "./pages/Home";
import Header from "./components/header/Header";
const App = () => {

  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App