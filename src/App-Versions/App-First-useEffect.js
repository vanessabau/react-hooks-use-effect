import React, {useState, useEffect} from 'react';
import '../App.css';

let born = false;

function App() {
    const [growth, setGrowth] = useState(0);
    const [nirvana, setNirvana] = useState(false);

    console.log(document.title);

    //Runs when Nirvana changes
    useEffect(()=>{
        if(born && growth > 70){
            document.title = "Nirvana attained"
        }
    }, [nirvana])

    // Runs on first render
    useEffect(()=>{
        console.log("I am born")
    }, []);

    // Runs on initial mount and every update
    useEffect(()=>{
        console.log("make mistake and learn")

        if(growth > 70){
            setNirvana(true);
            console.log(document.title)
        }
        return function cleanup(){
            console.log("cleanup after mistakes");
        }
    })

    // Does not run on initial mount but DOES run on every update
    useEffect(()=>{
        if(born){
            console.log("I am changing")
        }else{
            born = true
        }
    })



    const growHandle =() =>{
        setGrowth(growth + 10)
    }

    return (
        <div className="App">
            <header className="App-header">
                <h2>Use Effect</h2>
                <h3>growth: {growth}</h3>
                <button onClick={growHandle}>Learn and grown</button>
            </header>
        </div>
    );
}

export default App;
