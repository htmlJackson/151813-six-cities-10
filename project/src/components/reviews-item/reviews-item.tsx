import User from '../../components/user/user';
import { CommentType } from '../../types/comments';
import Rating from '../rating/rating';

type ReviewsItemProps = {
  data: CommentType;
};

const ReviewsItem = ({data} : ReviewsItemProps) => {
  const {user, rating, comment, date} = data;

  const dateTime = new Date(date);
  return (
    <li className="reviews__item">

      <User user={user} addClass={'reviews'} avatarSize={54} type={'Reviews'} />

      <div className="reviews__info">
        <Rating addClass={'reviews'} value={rating} />
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime={dateTime.toISOString().split('T')[0]}>
          {
            dateTime.toLocaleDateString('en-US', {year: 'numeric', month: 'long'})
          }
        </time>
      </div>
    </li>
  );
};

export default ReviewsItem;
