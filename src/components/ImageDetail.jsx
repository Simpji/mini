import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import ImagefindContext from '../context/ImagefindContext';

function ImageDetail() {
    const { photos } = useContext(ImagefindContext); // Get photos from context
    const { id } = useParams();

    // Check if IDs match, ensuring type consistency
    const image = photos.find(photo => photo.id.toString() === id);

    if (!image) return <div className="text-center text-red-500">Image not found.</div>;

    const comments = [
        "Absolutely stunning!",
        "This captures the beauty perfectly.",
        "Incredible shot!",
        "Love the colors!",
    ];

    return (
        <div className="max-w-2xl mx-auto p-4">
            <img 
                src={image.url} 
                alt={image.title} 
                className="w-full h-auto rounded-lg shadow-lg mb-4" 
            />
            <h2 className="text-2xl font-bold mb-2">{image.title}</h2>
            <p className="text-gray-700 mb-4">{image.description}</p>
            <h3 className="text-xl font-semibold mb-2">Comments:</h3>
            <ul className="list-disc list-inside">
                {comments.map((comment, index) => (
                    <li key={index} className="text-gray-600 mb-1">{comment}</li>
                ))}
            </ul>
        </div>
    );
}

export default ImageDetail;