import ImageCard from '../ImageCard/ImageCard';
import style from './ImageGallery.module.css';

const ImageGallery = ({ items, onImageClick }) => {      
    return (
        <ul className={style.list}>
            {items.map((item) => (
                <li className={style.item} key={item.id}>
                    <ImageCard image={item}  onClick={onImageClick} />
                </li>
            ))}
        </ul>   
    );
};

export default ImageGallery;