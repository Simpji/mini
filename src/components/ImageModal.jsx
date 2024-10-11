
import React, { useEffect, useState } from 'react';

function ImageModal({ image, onClose }) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (image) {
            setLoading(true);
        }
    }, [image]);

    const handleImageLoad = () => {
        setLoading(false);
    };

    if (!image) return null;

    return (
        <div className="modal" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <span className="close" onClick={onClose}>&times;</span>
                {loading && <div className="loading-indicator">Loading...</div>}
                <img 
                    src={image.url} 
                    alt={image.title} 
                    onLoad={handleImageLoad} 
                    style={loading ? { display: 'none' } : {}} 
                />
            </div>
        </div>
    );
}

export default ImageModal;