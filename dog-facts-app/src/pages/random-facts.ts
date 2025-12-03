interface FactData {
    source: string,
    text: string
}
export function GetRandomFacts() {
    async function loadRandomFact() {
        try {
            const response = await fetch('https://uselessfacts.jsph.pl/api/v2/facts/random?language=en')
            
            if (!response.ok) {
                throw new Error('Ошибка загрузки факта')
            }
            
            const data = await response.json();
            return displayFact(data);
            
        } catch (error) {
            return ['Ошибка: ${error}', ""]
        }
    }

    function displayFact(factData: FactData) {
        if (factData.text.length === 0) {
            return ['Факт не найден', ""]
        }

        const factsHTML = [factData.text, factData.source]
        return factsHTML
    }

    return loadRandomFact();
}