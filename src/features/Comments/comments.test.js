import {screen} from '@testing-library/dom'
import { renderWithProviders } from '../../test-utils';
import { Comments } from './Comments';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk'

describe('Comments component', () => {
    it('should render the correct author, created time, body and votes', () => {
        //arange
        const props = {
            key: 1,
            author: 'test-user',
            created: 1609373000,
            body: 'Test comment',
            votes: '20',
            replies: {
                key: 2,
                author: 'test-user2',
                created: 1609374000,
                body: 'Test comment2',
                votes: '250',
            }
        };
        //act
        const { getByText } = renderWithProviders(
            <Comments {...props} /> 
        )
        //assert
        expect(getByText(`Posted by u/${props.author} 2 years ago`)).toBeInTheDocument();
        expect(getByText(props.body)).toBeInTheDocument();
        expect(getByText(props.votes)).toBeInTheDocument();
        expect(getByText)
    });
});