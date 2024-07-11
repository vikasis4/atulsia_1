import React from 'react';;

function App() {

  // Initialized the state by using useState hook of react, it will be used for the input tag.
  const [num, setNum] = React.useState(null);

  // we are using this function to handle the user input, we are setting the user input into the num state.
  const handleChange = (e) => {
    setNum(parseInt(e.target.value))
  }
  
  // we are usiing this function to handle the click event of the button.
  const handleClick = () => {
    // Checking if the num state that is the value of the input tag is empty or not.
    if (!num) {
      alert("Please insert the value in the input box to get the new value");
      return;
    }
    // Updating the value of num state by 1.
    setNum(num + 1)
  }

  return (
    <div className="App">
      <input type="number" value={num} onChange={handleChange} />
      <button onClick={handleClick}>Increase Counter</button>
    </div>
  );
}

export default App;
