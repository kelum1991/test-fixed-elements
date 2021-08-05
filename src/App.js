import './App.css';

function App() {
  return (
    <div className="App">
      <div className="form-wrap">
        
     <form>
  <label for="fname">Username:</label>
  <input type="text" id="fname" name="fname" />
  <label for="lname">Password:</label>
  <input type="password" id="lname" name="lname" />
  <input type="submit" value="Submit" />
</form>
</div>
      <span className="fixed-element"></span>
    </div>
  );
}

export default App;
