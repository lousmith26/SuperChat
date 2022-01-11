import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <form method="POST" action="/signup" id="form">
        <input type="text" id="first_name" name="first_name" />
        <input type="text" id="last_name" name="last_name" />
        <button type="submit">Send</button>
      </form>
    </div>
     
    <Routes>
      <Route path="/" element={ user ? <Main user={ user }/> : <Signup /> } />
      <Route path="/signup" element={ <Signup /> } />
      <Route path="/signin" element={ <Signin /> } />
    </Routes>

    </BrowserRouter>
  );
}

export default App;
