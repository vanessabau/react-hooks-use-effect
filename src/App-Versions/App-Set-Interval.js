import React, {useState, useEffect} from 'react';
import '../App.css';

function App() {
    const [time, setTime] = useState(Date);

    useEffect(()=>{
        let handle = setInterval(()=>{
            setTime(Date)
        }, 1000);

        //Cleanup after update
        return () =>{
            clearInterval(handle);
        }
    })

    return (
        <div className="App">
            <header className="App-header">
                <h2>Use Effect Examples</h2>
                <h3>Date & Time : {time}</h3>
            </header>
        </div>
    );
}

export default App;
