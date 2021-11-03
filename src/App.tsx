import React from 'react';
import Subjects from './Components/Subjects'
import { Route} from 'react-router-dom';
import Subject from './Components/Subject';

const App:React.FC = (props)=> {
  return (
    <div className="App">
      <Route path="/subject/:id?" render={()=><Subject />}/>
      <Route exact path="/" render={()=><Subjects/>}/>
    </div>
  );
}

export default App;
