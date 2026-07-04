// 1. Зовнішні бібліотеки (Спершу React, потім інші пакети)
import { useEffect, useState } from "react"; 
import toast from "react-hot-toast"; 

// 2. Функції, утиліти та HTTP-запити (Сервіси) 
import getImages from "../../api/gallery-api"; 

// 3. Структурні / Лейаут компоненти (Контейнери)
import Section from "../Section/Section";
import Container from "../Container/Container"; 

// 4. Функціональні компоненти додатку
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery"; 
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn"; 
import ImageModal from "../ImageModal/ImageModal";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";


const App = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [modalData, setModalData] = useState(null);

  useEffect(() => {
    if (!searchValue.trim()) return;

    const fetchImages = async () => {
      try {
        setIsLoading(true);
        const data = await getImages(searchValue, page);
        setImages((prevState) => [...prevState, ...data]);
        toast.success("Images done...");
      } catch {
        setError(true);
        toast.error("Oops.. Something wrong.");
      } finally {
        setIsLoading(false);
      }
    };
    fetchImages();
  }, [searchValue, page]);

  const handleSearch = async (searchQuery) => {
    setSearchValue(searchQuery);
    setPage(1);
    setImages([]);
  };

  const handleLoadMore = async () => {
    setPage(page + 1);
  };

  const openModal = (ImageData) => {
    setModalData(ImageData);
  };

  const closeModal = () => {
    setModalData(null);
  };

  return (
    <Section>
      <Container>
        <SearchBar onSubmit={handleSearch} />
        {error && (
          <ErrorMessage message={`Oops... Something wrong. Pls reload page.`} />
        )}
        {images?.length > 0 && (
          <ImageGallery items={images} onImageClick={openModal} />
        )}
        {images?.length > 0 && (
          <LoadMoreBtn onClick={handleLoadMore} isLoading={isLoading} />
        )}
        {isLoading && images?.length === 0 && (
          <Loader message={`Loading images...`} />
        )}

        <ImageModal
          isOpen={modalData !== null}
          onClose={closeModal}
          image={modalData}
        />
      </Container>
    </Section>
  );
};

export default App;
