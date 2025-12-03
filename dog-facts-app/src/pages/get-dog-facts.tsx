import { GetDogFacts } from "./dog-facts";
import { useState } from "react";

export default function GetDogFactsT() {
  const [fact, setFact] = useState("");

  async function loadFact() {
    const newFact = await GetDogFacts();
    if (newFact) {
        setFact(newFact);
    }
  }
  
  if (fact == "") {
    loadFact()
  }

  return (
    <div>
        <button id="loadFacts" onClick={loadFact} className="btn">Загрузить еще факты</button>
        <div className="fact-card">
            <p>{fact}</p>
        </div>
    </div>
  );
}
