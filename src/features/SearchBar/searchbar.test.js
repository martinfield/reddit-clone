import { render, fireEvent } from '@testing-library/react';
import { SearchBar} from './searchbar';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

let store = mockStore({
    searchbar: {
        searchResults: []
    }
})

describe('SearchBar', () => {
  it('renders a search input', () => {
    const { getByPlaceholderText } = render(
        <Provider store={store}>
            <Router>
                <SearchBar />
            </Router>
        </Provider>
            
    );
    const input = getByPlaceholderText('Search Reddit...');
    expect(input).toBeInTheDocument();
  });

  it('updates the search term on change', () => {
    const { getByPlaceholderText } = render(
        <Provider store={store}>
            <Router>
                <SearchBar />
            </Router>
        </Provider>
        );
    const input = getByPlaceholderText('Search Reddit...');
    fireEvent.change(input, { target: { value: 'test' } });
    expect(input.value).toBe('test');
  });
});