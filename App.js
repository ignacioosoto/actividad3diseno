import React, { useState } from 'react';

const ImagenConLike = ({ src, alt }) => {
    const [liked, setLiked] = useState(false);

    const toggleLike = () => {
        setLiked(!liked);
    };

    return (
        <div className="imagen">
            <img src={src} alt={alt} />
            <button 
                className={`boton-like ${liked ? 'liked' : ''}`} 
                onClick={toggleLike}
            >
                {liked ? 'Quitar Like' : 'Dar Like'}
            </button>
        </div>
    );
};

const App = () => {
    return (
        <div className="contenedor">
            <ImagenConLike 
                src="https://media-front.elmostrador.cl/2022/04/A_UNO_1365950.jpg" 
                alt="Imagen 1" 
            />
            <ImagenConLike 
                src="https://www.prensafutbol.cl/site-media/images/arturovidal-calma-colocolo-godoycruz-libertadores-2024-imago-66392be257a28.jpg" 
                alt="Imagen 2" 
            />
        </div>
    );
};

export default App;
