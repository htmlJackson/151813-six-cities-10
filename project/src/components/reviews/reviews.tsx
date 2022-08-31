import ReviewsForm from '../../components/reviews-form/reviews-form';
import ReviewsList from '../../components/reviews-list/reviews-list';

import useHotelId from '../../hooks/useHotelId';
import { fetchCommentsAction } from '../../store/api-actions';
import { getComments } from '../../store/app-data/selectors';
import { useAppSelector } from '../../hooks';
import { getAuthorizationStatus } from '../../store/user-process/selectors';

const Reviews = () => {
  useHotelId(fetchCommentsAction);
  const commentsData = useAppSelector(getComments);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">
        Reviews · <span className="reviews__amount">{commentsData.length}</span>
      </h2>
      <ReviewsList commentsData={commentsData} />
      { authorizationStatus === 'AUTH' && <ReviewsForm /> }
    </section>
  );
};

export default Reviews;
