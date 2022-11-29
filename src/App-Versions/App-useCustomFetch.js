import React, { useState } from "react";
import useCustomFetch from "./hooks/useCustomFetch";
import "./App.css";

function App() {
  const [url, setUrl] = useState(null);
  const [data, loading, error] = useCustomFetch(url);

  function getFollowers(e) {
    if (e.key === "Enter") {
      setUrl("https://api.github.com/users/" + e.target.value);
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <h2>use Custom fetch hook</h2>
        <h3>
          Git Id <input onKeyPress={getFollowers}></input>
        </h3>
        {loading && url && <div>Loading....</div>}
        {data && data.rData && data.rData.followers && (
          <div>Followers: {data.rData.followers}</div>
        )}
        {error && <div>Error: {error}</div>}
      </header>
    </div>
  );
}

export default App;
