import {Link} from 'react-router-dom';
import Header from '../../components/header/header';

const PageNotFound = () => (
  <div className="page page--gray">
    <Header noNav />
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
