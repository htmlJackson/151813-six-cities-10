import Header from '../../components/header/header';
import {useRef, FormEvent, useEffect} from 'react';
import {useNavigate, Link} from 'react-router-dom';
import {useAppSelector, useAppDispatch} from '../../hooks';
import {AppRoute, AuthorizationStatus, citiesList} from '../../const';
import {AuthData} from '../../types/auth-data';
import {loginAction, checkAuthAction} from '../../store/api-actions';
import {changeCity} from '../../store/app-data/app-data';

const Login = () => {
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit = (authData: AuthData) => {
    dispatch(loginAction(authData));
    setTimeout(() => {
      dispatch(checkAuthAction());
      navigate(AppRoute.Root);
    }, 100);
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (loginRef.current !== null && passwordRef.current !== null) {
      onSubmit({
        email: loginRef.current.value,
        password: passwordRef.current.value,
      });
    }
  };

  const AuthStatus = useAppSelector((state) => state.USER.authorizationStatus);

  useEffect(() => {
    if (AuthStatus === AuthorizationStatus.Auth) {
      navigate(AppRoute.Root);
    }
  }, [AuthStatus, navigate]);

  const randomCity = citiesList[Math.floor(Math.random() * citiesList.length)];

  return (
    <div className="page page--gray page--login">
      <Header noNav />
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" action="#" method="post" onSubmit={handleSubmit}>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  className="login__input form__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  ref={loginRef}
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  className="login__input form__input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  pattern="(?=.*\d)(?=.*[a-zA-Z]).*"
                  required
                  ref={passwordRef}
                />
              </div>
              <button
                className="login__submit form__submit button"
                type="submit"
              >
                Sign in
              </button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to={AppRoute.Root} onClick={() => dispatch(changeCity(randomCity))}>
                <span>{randomCity}</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Login;
