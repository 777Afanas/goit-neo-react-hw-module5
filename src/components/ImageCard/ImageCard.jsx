import style from "./ImageCard.module.css";

const ImageCard = ({image, onClick}) => {    
  const { urls, alt_description } = image;
  const { small } = urls;  
  
  return (
    <div className={style.card}>
      <img src={small} alt={alt_description} onClick={()=> onClick(image)} />
      {/* style={{cursor: 'pointer'}} */}
    </div>
  );
};

export default ImageCard;
