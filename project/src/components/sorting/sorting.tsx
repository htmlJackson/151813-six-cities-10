import { sortStatusArray } from '../../const';
import {setSortStatus} from '../../store/app-data/app-data';
import {useAppDispatch, useAppSelector} from '../../hooks';
import { useState } from 'react';
import { getSortStatus } from '../../store/app-data/selectors';

const Sorting = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useAppDispatch();
  const currentSortStatus = useAppSelector(getSortStatus);

  const onSortChange = (sortStatus: string) => {
    setOpen(false);
    dispatch(setSortStatus(sortStatus));
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={() => setOpen(!open)}>
        {sortStatusArray.find((sort) => sort.status === currentSortStatus)?.desciption}
        <svg className="places__sorting-arrow" width={7} height={4}>
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul className={`places__options places__options--custom${open ? ' places__options--opened' : ''}`}>
        {sortStatusArray.map((option) => (
          <li
            key={`option-${option.status}`}
            className={`places__option ${option.status === currentSortStatus ? ' places__option--active' : ''}`}
            tabIndex={0}
            onClick={() => onSortChange(option.status)}
          >

            {option.desciption}
          </li>
        ))}
      </ul>
    </form>
  );
};

export default Sorting;
