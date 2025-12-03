interface Fact {
    id: string,
    type: string,
    attributes: {
        body : string;
    }
}

// document.addEventListener('DOMContentLoaded', 
export function GetDogFacts() {
    async function loadDogFacts() {
        try {
            const response = await fetch('https://dogapi.dog/api/v2/facts');
            
            if (!response.ok) {
                throw new Error('Ошибка загрузки фактов');
            }
            
            const data = await response.json();
            return displayFacts(data.data);
            
        } catch (error) {
            return `Ошибка: ${error}`;
        }
    }

    function displayFacts(facts: Fact[]) {
        if (!facts || facts[0].attributes.body.length === 0) {
            return 'Факты не найдены';
        }

        const factsHTML = facts[0].attributes.body
        return factsHTML
    }

    return loadDogFacts();
}
