interface ImageData {
    url: string
}

export function GetDogImage() {
    async function loadDogImage() {
        try {
            const response = await fetch('https://random.dog/woof.json?include=jpg');
            
            if (!response.ok) {
                throw new Error('Ошибка загрузки изображения');
            }
            
            const data = await response.json();
            return displayImage(data);
            
        } catch (error) {
            return `<p class="error">Ошибка: ${error}</p>`;
        }
    }

    function displayImage(imageData: ImageData) {
        if (!imageData.url) {
            return '<p>Изображение не найдено</p>';
        }
        console.log(imageData.url)
        const image = imageData.url;
        return image
    }

    return loadDogImage();
}
