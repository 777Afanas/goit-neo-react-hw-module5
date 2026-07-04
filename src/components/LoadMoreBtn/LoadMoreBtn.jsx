import style from "./LoadMoreBtn.module.css";


const LoadMoreBtn = ({ onClick, isLoading }) => {
  
  return (
    <div className={style.card}>
      <button onClick={onClick} disabled={isLoading}>
        {isLoading ? "Loading..." : "Load more..."} { /*Зміна тексту*/}
      </button> 
    </div>
  );
};

export default LoadMoreBtn;