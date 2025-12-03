interface ImageData {
    url: string
}

document.addEventListener('DOMContentLoaded', function() {
    const loadButton = document.getElementById('loadImage') as HTMLButtonElement
    const container = document.getElementById('image-container') as HTMLElement

    loadButton.addEventListener('click', loadDogImage);

    async function loadDogImage() {
        try {
            container.innerHTML = '<p>Загрузка...</p>';
            
            const response = await fetch('https://random.dog/woof.json?include=jpg');
            
            if (!response.ok) {
                throw new Error('Ошибка загрузки изображения');
            }
            
            const data = await response.json();
            displayImage(data);
            
        } catch (error) {
            container.innerHTML = `<p class="error">Ошибка: ${error}</p>`;
        }
    }

    function displayImage(imageData: ImageData) {
        if (!imageData.url) {
            container.innerHTML = '<p>Изображение не найдено</p>';
            return;
        }

        container.innerHTML = `
            <div class="image-card">
                <img src="${imageData.url}" alt="Случайная собака" onerror="this.style.display='none'">
            </div>
        `;
    }

    loadDogImage();
});
