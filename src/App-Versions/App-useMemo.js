import React, {useState, useMemo} from 'react';
import Child from '../components/child'
import '../App.css';


function App() {
    const [i, setI]=useState(0)

    function onClickHandle(){
        setI(i + 1)
    }

    const memoChild = useMemo(()=>{
        return <Child></Child>
    }, [i]);

    return (
        <div className="App">
            <header className="App-header">
                <h2>useMemo</h2>
                <h3>i: {i}</h3>
                <button onClick={onClickHandle}>Increment I</button>
                <h3>normal render</h3>
                <Child></Child>
                <h3>Memo render</h3>
                {memoChild}
            </header>
        </div>
    );
}

export default App;
