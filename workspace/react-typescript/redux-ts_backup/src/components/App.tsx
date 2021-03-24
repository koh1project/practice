import { Provider } from 'react-redux';
import { store } from '../state';
import RepositoriesList from './RepositoriesList';
const App = () => {
  return (
    <Provider store={store}>
      <div>Search For a Package</div>
      <RepositoriesList />
    </Provider>
  );
};
export default App;
