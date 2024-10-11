import { createContext, useEffect, useState } from "react";

const ImagefindContext = createContext();

export const ImagefindProvider = ({ children }) => {
    const [photos, setPhotos] = useState([]);
    const [error, setError] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedImage, setSelectedImage] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        fetchPhotos(); 
    }, []);

    const fetchPhotos = async (query = 'African') => {
        setLoading(true);
        try {
            const res = await fetch(`http://localhost:3000/photos?query=${query}`); 
            if (!res.ok) throw new Error('Failed to fetch photos');
            const data = await res.json();
            setPhotos(data);
            setError(null);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const filteredPhotos = photos.filter(photo =>
        photo.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        photo.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
        photo.location.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const openModal = (image) => {
        setSelectedImage(image);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setSelectedImage(null);
        setIsModalOpen(false);
    };

    return (
        <ImagefindContext.Provider value={{
            photos: filteredPhotos,
            error,
            loading, 
            handleSearchChange,
            searchQuery,
            openModal,
            closeModal,
            selectedImage,
            isModalOpen,
            fetchPhotos, 
        }}>
            {children}
        </ImagefindContext.Provider>
    );
}

export default ImagefindContext;