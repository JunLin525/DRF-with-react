import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
//import {render} from "react-dom"
import './App.css'
import Header from './components/Header'
import NoteListPage from './pages/NoteListPage'
import NotePage from './pages/NotePage'
function App() {
  return (
      <Router>
        <div className="container">
          <div className="App">
          <Header />
          <Routes>
              <Route path ="/" exact element ={<NoteListPage />} /> 
              <Route path ="/note/:noteID" element ={<NotePage />} />
          </Routes>
          </div>
        </div>
      </Router>
  );
}

export default App;
