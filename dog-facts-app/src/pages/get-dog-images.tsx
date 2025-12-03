import { GetDogImage } from "./dog-images";
import { useState } from "react";

export default function GetDogImagesT() {
    const [image, setImage] = useState("");
    async function loadImage() {
        const newImage = await GetDogImage();
        if (newImage) {
            setImage(newImage);
        }
    }
    if (image == "") {
        loadImage();    
    }

    return (
        <div>
            <button  id="loadImage" onClick={loadImage} className="btn">Загрузить новую картинку</button>
            <div id="image-container" className="content">
                <div className="image-card">
                    <img src={image} alt="Случайная собака" />
                </div>
            </div>
        </div>
    );
}
