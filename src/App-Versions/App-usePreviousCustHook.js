import React, {useState} from 'react';
import usePrevious from '../hooks/usePrevious'
import '../App.css';


function App() {
    const[age, setAge] = useState(21)
    const previousAge = usePrevious(age);

    return (
        <div className="App">
            <header className="App-header">
                <h2>Custom Hook usePrevious</h2>
                <h3>Current age {age}</h3>
                <h3>Previous age {previousAge}</h3>
                <button onClick={()=>{setAge(age-1)}}>Make me younger</button>
            </header>
        </div>
    );
}

export default App;
