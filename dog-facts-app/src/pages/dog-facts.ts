interface Fact {
    id: string,
    type: string,
    attributes: {
        body : string;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const loadButton = document.getElementById('loadFacts') as HTMLButtonElement;
    const container = document.getElementById('facts-container') as HTMLElement;

    loadButton.addEventListener('click', loadDogFacts);

    async function loadDogFacts() {
        try {
            container.innerHTML = '<p>Загрузка...</p>';
            
            const response = await fetch('https://dogapi.dog/api/v2/facts');
            
            if (!response.ok) {
                throw new Error('Ошибка загрузки фактов');
            }
            
            const data = await response.json();
            displayFacts(data.data);
            
        } catch (error) {
            container.innerHTML = `<p class="error">Ошибка: ${error}</p>`;
        }
    }

    function displayFacts(facts: Fact) {
        console.log(facts.attributes)
        if (!facts || facts.attributes.body.length === 0) {
            container.innerHTML = '<p>Факты не найдены</p>';
            return;
        }

        const factsHTML = `
            <div class="fact-card">
                <p>${facts.attributes.body}</p>
            </div>
        `

        container.innerHTML = factsHTML;
    }

    loadDogFacts();
});
