import React, {useState} from "react";

function App() {
  const [dividend, setDividend] = useState("");
  const [divider, setDivider] = useState("");
  const [reply, setReply] = useState("");

  async function sendData() {
    try {
      const data = await fetch('/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({dividend, divider}),
      });

      return await data.text();

    } catch (e) {
      console.error(e);
    }
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    sendData().then(response => setReply(response));
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="numberA" value={dividend} onChange={(e) => setDividend(e.target.value)}/>
        <input type="text" name="numberB" value={divider} onChange={(e) => setDivider(e.target.value)}/>
        <button type="submit">Sprawdź dzielnik</button>
      </form>
      <p>{reply}</p>
    </div>
  );
}

export default App;
