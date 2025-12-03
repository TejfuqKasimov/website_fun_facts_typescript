import { GetRandomFacts } from "./random-facts";
import { useState } from "react";

export default function GetRandomFactsT() {
  const [fact, setFact] = useState("");
  const [source, setSource] = useState("");

  async function loadFact() {
    const newFact = await GetRandomFacts();
    if (newFact) {
        setFact(newFact[0]);
        setSource(newFact[1])
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
            {source ? <p className="source">Источник: {source}</p> : ''}
        </div>
    </div>
  );
}

