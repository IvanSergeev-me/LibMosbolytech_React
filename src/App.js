
import './App.css';
import { Route } from 'react-router-dom';
import Subjects from './Components/Subjects/Subjects.jsx';
import Subject from './Components/Subject/Subject.jsx';

function App(props) {
  return (
    <div className="App">
        <Route path="/subject/:id?" render={()=><Subject />}/>
        <Route exact path="/" render={()=><Subjects/>}/>
    </div>
  );
}

export default App;
