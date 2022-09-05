import Logo from '../logo/logo';
import { useAppSelector, useAppDispatch } from '../../hooks';
import {Link} from 'react-router-dom';
import { AuthorizationStatus} from '../../const';
import {logoutAction} from '../../store/api-actions';
import {getAuthorizationStatus, getUser} from '../../store/user-process/selectors';
import {getFavoriteOffers} from '../../store/app-data/selectors';
import {checkAuthAction} from '../../store/api-actions';

type HeaderProps = {
  noNav?: boolean;
};

const Header = ({ noNav = false }: HeaderProps) => {
  const dispatch = useAppDispatch();

  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const userData = useAppSelector(getUser);
  const favoriteOffers = useAppSelector(getFavoriteOffers);

  const handleSignOutClick = () => {
    dispatch(logoutAction());
    setTimeout(() => dispatch(checkAuthAction()), 100);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo />
          </div>
          {!noNav && (
            <nav className="header__nav">
              <ul className="header__nav-list">
                {authorizationStatus === AuthorizationStatus.Auth && userData ? (
                  <>
                    <li className="header__nav-item user">
                      <Link to="/favorites"
                        className="header__nav-link header__nav-link--profile"
                      >
                        <div className="header__avatar-wrapper user__avatar-wrapper" style={{'backgroundImage': `url(${userData.avatarUrl})`}}></div>
                        <span className="header__user-name user__name">
                          {userData.email}
                        </span>
                        <span className="header__favorite-count">{favoriteOffers.length}</span>
                      </Link>
                    </li>
                    <li className="header__nav-item">
                      <a className="header__nav-link" onClick={handleSignOutClick}>
                        <span className="header__signout">Sign out</span>
                      </a>
                    </li>
                  </>
                ) : (
                  <li className="header__nav-item user">
                    <Link to="/login"
                      className="header__nav-link header__nav-link--profile"
                    >
                      <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                      <span className="header__login">Sign in</span>
                    </Link>
                  </li>
                )}
              </ul>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
