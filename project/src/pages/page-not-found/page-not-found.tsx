import {Link} from 'react-router-dom';
import Logo from '../../components/logo/logo';

const PageNotFound = () => (
  <div className="page page--gray">
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo />
          </div>
        </div>
      </div>
    </header>
    <main className="page__main page__main--login">
      <div className="cities" style={{'minHeight': '80vh'}}>
        <div className="container">
          <h1>Page not found</h1>
          <Link to={'/'} style={{'display': 'inline-flex', 'marginBottom': '15px'}}>Back to main page</Link>
        </div>
      </div>

    </main>
  </div>
);

export default PageNotFound;
