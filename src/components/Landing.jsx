
import React, { useContext } from 'react';
import ImageModal from './ImageModal';
import ImagefindContext from '../context/ImagefindContext';

function Landing({ photos }) {
    const { openModal, isModalOpen, selectedImage, closeModal, loading } = useContext(ImagefindContext);

    if (loading) {
        return <div>Loading photos...</div>; // Loading state in Landing
    }

    if (photos.length === 0) {
        return <div>No photos found...</div>;
    }

    return (
        <div className="landing">
            <div className="image-grid">
                {photos.slice(0, 8).map(photo => (
                    <div key={photo.id} className="image-card" onClick={() => openModal(photo)}>
                        <img src={photo.url} alt={`Image titled "${photo.title}" by ${photo.author}`} />
                        <div className="image-overlay">
                            <h3>{photo.title}</h3>
                            <p>{photo.author} - {photo.location}</p>
                        </div>
                    </div>
                ))}
            </div>
            {isModalOpen && <ImageModal image={selectedImage} onClose={closeModal} />}
        </div>
    );
}

export default Landing;
