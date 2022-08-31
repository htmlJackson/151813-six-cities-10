import {useAppDispatch, useAppSelector} from '../../hooks';
import {changeCity} from '../../store/app-data/app-data';
import { citiesList } from '../../const';
import {getCity} from '../../store/app-data/selectors';

const CitiesList = () => {
  const dispatch = useAppDispatch();
  const currentCity = useAppSelector(getCity);

  const onCityChange = (city : string) => {
    dispatch(changeCity(city));
  };

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
                  onCityChange(city);
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
