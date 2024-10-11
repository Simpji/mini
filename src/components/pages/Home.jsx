
import React, { useContext } from 'react';
import Landing from '../Landing';
import ImagefindContext from '../../context/ImagefindContext';

function Home() {
    const { photos, searchQuery, handleSearchChange, loading, error, fetchPhotos } = useContext(ImagefindContext);

    const handleSearchSubmit = async (event) => {
        event.preventDefault();
        await fetchPhotos(searchQuery); 
    };

    return (
        <div>
            <form onSubmit={handleSearchSubmit} className="search-bar">
                <input 
                    type="text" 
                    placeholder="Search photos or fun" 
                    value={searchQuery} 
                    onChange={handleSearchChange} 
                />
                <button type="submit">Search</button>
            </form>
            
            {loading && <div className="loading-indicator">Loading...</div>} 
            {error && <div className="error-message">{error}</div>} 

            <Landing photos={photos} />
        </div>
    );
}

export default Home;