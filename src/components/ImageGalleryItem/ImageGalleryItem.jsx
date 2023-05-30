import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';
export const ImageGalleryItem = ({ url, number, id, deleteContact }) => {
  return (
    <>
      <li className={css.gallery_item}>
        <img src={url} alt="" />
      </li>
    </>
  );
};
