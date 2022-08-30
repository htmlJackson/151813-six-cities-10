import ReviewsItem from '../reviews-item/reviews-item';
import { CommentsType } from '../../types/comments';

type ReviewsListProps = {
  commentsData: CommentsType;
};

const ReviewsList = ({ commentsData }: ReviewsListProps) => {
  const REVIEWS_LIMIT = 10;

  let sortedComments = [...commentsData];

  if (commentsData) {
    sortedComments = commentsData
      .slice()
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }

  return (
    <ul className="reviews__list">
      {sortedComments.map((review, index) => {
        if (index < REVIEWS_LIMIT) {
          return <ReviewsItem data={review} key={`review-${review.id}`} />;
        }
      })}
    </ul>
  );
};

export default ReviewsList;
