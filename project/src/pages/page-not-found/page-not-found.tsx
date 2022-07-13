const PageNotFound = () => (
  <div className="page page--gray">
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <a className="header__logo-link" href="main.html">
              <img
                className="header__logo"
                src="img/logo.svg"
                alt="6 cities logo"
                width={81}
                height={41}
              />
            </a>
          </div>
        </div>
      </div>
    </header>
    <main className="page__main page__main--login">
      <h1>Page not found</h1>
      
    </main>
  </div>
);

export default PageNotFound;