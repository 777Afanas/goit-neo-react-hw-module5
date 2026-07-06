
const HomePage = () => {
  return (
    <div>HomePage</div>
  )
}

export default HomePage

// const HomePage = () => {
//   const [images, setImages] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(false);
//   const [page, setPage] = useState(1);
//   const [searchValue, setSearchValue] = useState("");
//   const [modalData, setModalData] = useState(null);

// useEffect(() => {
//   getTrendingMovies();
// }, []);

//   useEffect(() => {
//     if (!searchValue.trim()) return;

//     const fetchImages = async () => {
//       try {
//         setIsLoading(true);
//         const data = await getTrendingMovies();
//         setImages((prevState) => [...prevState, ...data]);
//         toast.success("Images done...");
//       } catch {
//         setError(true);
//         toast.error("Oops.. Something wrong.");
//       } finally {
//         setIsLoading(false);
//       }
//     };
//     fetchImages();
//   }, [searchValue, page]);

//   const handleSearch = async (searchQuery) => {
//     setSearchValue(searchQuery);
//     setPage(1);
//     setImages([]);
//   };

//   const handleLoadMore = async () => {
//     setPage(page + 1);
//   };

//   const openModal = (ImageData) => {
//     setModalData(ImageData);
//   };

//   const closeModal = () => {
//     setModalData(null);
//   };

//   return (
//     <Section>
//       <Container>
//         <SearchBar onSubmit={handleSearch} />
//         {error && (
//           <ErrorMessage message={`Oops... Something wrong. Pls reload page.`} />
//         )}
//         {images?.length > 0 && (
//           <ImageGallery items={images} onImageClick={openModal} />
//         )}
//         {images?.length > 0 && (
//           <LoadMoreBtn onClick={handleLoadMore} isLoading={isLoading} />
//         )}
//         {isLoading && images?.length === 0 && (
//           <Loader message={`Loading images...`} />
//         )}

//         <ImageModal
//           isOpen={modalData !== null}
//           onClose={closeModal}
//           image={modalData}
//         />
//       </Container>
//     </Section>
//   );
// };