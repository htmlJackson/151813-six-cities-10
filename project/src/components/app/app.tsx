import MainPage from '../../pages/main-page/main-page';

type AppProps = {
  cardsCount: number;
}

const App = ({cardsCount} : AppProps): JSX.Element => (
  <MainPage cardsCount={cardsCount} />
);

export default App;
