import { useState } from "react";

/*
  Array States:
  State'imizi array olarak tanımlayıp bu state'imizi nasıl güncelliyeceğimizi öğrenmeye çalışalım.
*/

function App() {
  const [name, setName] = useState("Emirhan");
  const [age, setAge] = useState(25);
  const [friends, setFriends] = useState(["Deneme", "Test"]);
  const [address, setAddress] = useState({ title: "Ankara", zip: 16066 });


  return (
    <div className="App">
      <h1>Merhaba {name}</h1>
      <h2>{age}</h2>

      <button onClick={() => setName("Deneme")}>Change Name</button>
      <button onClick={() => setAge("55")}>Change Age</button>
      <button onClick={() => setAge("55") | setName("Deneme")}>Change All</button>

      <hr />
      <br /><br />

      <h2>Friends</h2>
      {friends.map((friend, index) => (
          <div key={index}>{friend}</div>
        ))}

      <br />
      <button onClick={() => setFriends([...friends, "Yeni"])}>Add new friend</button>

      <hr />
      <br /><br />

      <h2>Adress</h2>
      <div>{address.title} {address.zip}</div>

      <br />
      <button onClick={() => setAddress({...address, title: "Bursa", zip: 16600})}>Change adress</button>
      
    </div>
  );
}

export default App;
