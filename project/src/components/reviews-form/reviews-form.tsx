import { useState, FormEvent } from 'react';
import { NewReviewData } from '../../types/new-review-data';
import { useAppDispatch } from '../../hooks';
import { fetchCommentsAction, addReviewAction } from '../../store/api-actions';
import { useParams } from 'react-router-dom';

const ReviewsForm = () => {
  const [reviewData, setReviewData] = useState('');
  const [ratingValue, setRatingValue] = useState('');

  const reviewRating = [
    {
      value: 5,
      text: '5-stars',
      title: 'perfect',
    },
    {
      value: 4,
      text: '4-stars',
      title: 'good',
    },
    {
      value: 3,
      text: '3-stars',
      title: 'not bad',
    },
    {
      value: 2,
      text: '2-stars',
      title: 'badly',
    },
    {
      value: 1,
      text: '1-star',
      terribly: 'terribly',
    },
  ];


  const dispatch = useAppDispatch();

  const { id } = useParams();

  const onSubmit = (newRewiew: NewReviewData) => {
    dispatch(addReviewAction(newRewiew));
    dispatch(fetchCommentsAction(id));

    setReviewData('');
    setRatingValue('');
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    onSubmit({
      hotelId: id,
      comment: reviewData,
      rating: +ratingValue,
    });
  };

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {
          reviewRating.map((rating) => (
            <>
              <input
                className="form__rating-input visually-hidden"
                name="rating"
                value={rating.value}
                id={rating.text} type="radio"
                onChange={(evt) => setRatingValue(evt.target.value)}
                checked={+ratingValue === rating.value}
              />
              <label htmlFor={rating.text} className="reviews__rating-label form__rating-label" title={rating.title}>
                <svg className="form__star-image" width={37} height={33}>
                  <use xlinkHref="#icon-star" />
                </svg>
              </label>
            </>)
          )
        }
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={reviewData}
        onChange={(evt) => setReviewData(evt.target.value)}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={reviewData.length < 50 || ratingValue === ''}>Submit</button>
      </div>
    </form>
  );
};

export default ReviewsForm;
