import { useState, useEffect } from 'react';
import css from './App.module.css';
import PhotoList from './ImageGallery/PhotoList';
import { fetchPhotos } from '../photos-api';
import SearchBar from './SearchBar/SearchBar';
import ErrorMessage from './ErrorMessage/ErrorMessage';
import toast, { Toaster } from 'react-hot-toast';
import Loader from './Loader/Loader';
import ModalWindow from './ImageModal/ModalWindow';

export default function App () {
  const [searchQuery, setSearchQuery] = useState('');
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  useEffect(() =>{
    if(searchQuery === '') {
      return;
    }

    async function getData() {
      try {
        setIsLoading(true);
        setError(false);
        const data = await fetchPhotos(searchQuery, page);
        setPhotos((prewPhotos) => {
          return page === 1 ? data : [...prewPhotos, ...data];
        });

      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getData()
  }, [page, searchQuery]);

  const handleSearch = async (newQuery) => {
    setSearchQuery(newQuery);
    setPage(1);
    setPhotos([]);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  const isOpenModal = (item) => {
    setSelectedPhoto(item);
  };

  const onCloseModal = () => {
    setSelectedPhoto(null);
  };

  return (
  <div className={css.container}>
    <SearchBar onSearch={handleSearch} />
    {error && <ErrorMessage message={'Oops! Error! Reload!'} />}
    {photos.length > 0 && <PhotoList items={photos} isOpen={isOpenModal} />}
    {photos.length > 0 && !isLoading && 
    (<button onClick={handleLoadMore}>Load more</button>)}
    {isLoading && <Loader />}
    {selectedPhoto && <ModalWindow 
      // isOpen={true}  
      item={selectedPhoto}
      onClose={onCloseModal} />}
    <Toaster position='top-right'/>
  </div>
  );
}