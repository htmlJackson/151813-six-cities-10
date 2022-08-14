import {useAppDispatch} from '../../hooks';
import {changeCity} from '../../store/action';

type CitiesListProps = {
  citiesList: string[];
  currentCity: string;
}

const CitiesList = ({citiesList, currentCity} : CitiesListProps) => {
  const dispatch = useAppDispatch();

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {
          citiesList.map((city) => (
            <li className="locations__item" key={city}>
              <a
                href="#"
                className={`locations__item-link tabs__item${city === currentCity ? ' tabs__item--active' : ''}`}
                onClick={(evt) => {
                  evt.preventDefault();
                  dispatch(changeCity(city));
                }}
              >
                <span>{city}</span>
              </a>
            </li>
          ))
        }
      </ul>
    </section>
  );
};

export default CitiesList;
