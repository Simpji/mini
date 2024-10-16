import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ImageModal({ image, onClose }) {
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        if (image) {
            setLoading(true);
        }
    }, [image]);

    const handleImageLoad = () => {
        setLoading(false);
    };

    const handleImageClick = () => {
        navigate(`/image/${image.id}`); // Navigate to ImageDetail page
        onClose(); // Close the modal
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
                    onClick={handleImageClick} // Click to navigate
                    style={loading ? { display: 'none' } : { cursor: 'pointer' }} // Show pointer cursor
                />
            </div>
        </div>
    );
}

export default ImageModal;