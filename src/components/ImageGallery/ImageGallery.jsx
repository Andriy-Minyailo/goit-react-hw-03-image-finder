import PropTypes from 'prop-types';
import css from './ImageGallery.module.css';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ imgs, deleteContact }) => {
  return (
    <>
      <ul className={css.gallery}>
        {imgs.map(el => {
          return (
            <ImageGalleryItem
              key={el.id}
              id={el.id}
              url={el.webformatURL}
              //   number={el.number}
              //   deleteContact={deleteContact}
            />
          );
        })}
      </ul>
    </>
  );
};
