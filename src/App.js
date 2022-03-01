import './App.css';

function App() {
  const arr = [1, 2, 3];

  Array.prototype.each = function () {};
  let result = '';

  for (let digit in arr) {
    result += digit;
  }

  console.log(result);

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>url-shortening-app</h1>
      </header>
    </div>
  );
}

export default App;
