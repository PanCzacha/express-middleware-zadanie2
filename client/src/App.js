import React, {useState} from "react";

function App() {
  const [dividend, setDividend] = useState("");
  const [divider, setDivider] = useState("");
  const [reply, setReply] = useState("");

  async function sendData() {
    try {
      const data = await fetch('/calc', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({dividend, divider}),
      });
      return await data.json();
    } catch (e) {
      console.error(e);
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setReply("Loading....");
    sendData().then(response => setReply(response));
  }

  const showMessage = () => {
    if (typeof reply.message === "boolean") {
      if (reply.message) {
        return `Liczba ${reply.values[1]} jest dzielnikiem liczby ${reply.values[0]}`
      }
      return `Liczba ${reply.values[1]} NIE jest dzielnikiem liczby ${reply.values[0]}`
    } else if (reply.message) {
      return reply.message
    } else {
      return reply
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="numberA" value={dividend} onChange={(e) => setDividend(e.target.value)}/>
        <input type="text" name="numberB" value={divider} onChange={(e) => setDivider(e.target.value)}/>
        <button type="submit">Sprawdź dzielnik</button>
      </form>
      <p>{showMessage()}</p>
    </div>
  );
}

export default App;
