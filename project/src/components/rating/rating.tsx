type RatingProps = {
  value: number;
  showValue?: boolean;
  addClass?: string;
};

const Rating = ({
  value = 0,
  showValue = false,
  addClass = 'place-card',
}: RatingProps) => (
  <div className={`${addClass}__rating rating`}>
    <div className={`${addClass}__stars rating__stars`}>
      <span style={{ width: `${value * 20}%` }} />
      <span className="visually-hidden">Rating</span>
    </div>
    {showValue && (
      <span className="property__rating-value rating__value">{value}</span>
    )}
  </div>
);

export default Rating;
