import { getOffer } from '../../store/app-data/selectors';
import { useAppSelector } from '../../hooks';
const Gallery = () => {
  const IMAGE_LIMIT = 6;
  const hotelData = useAppSelector(getOffer);

  if (!hotelData) {
    return null;
  }

  return (
    <div className="property__gallery-container container">
      <div className="property__gallery">
        {hotelData.images.map((imageSrc, index) => {
          if (index < IMAGE_LIMIT) {
            return (
              <div
                className="property__image-wrapper"
                key={`property-${imageSrc}`}
              >
                <img
                  className="property__image"
                  src={imageSrc}
                  alt="Photo studio"
                />
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Gallery;
