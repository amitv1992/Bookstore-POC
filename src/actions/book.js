import nyAPI from '../apis/nyAPI';
import { key } from '../apis/nyAPIKey';

export const modifyBookCategoryName = bookCategoryName => {
  return {
    type: 'MODIFY_BOOK_CATEGORY_NAME',
    payload: { bookCategoryName }
  };
};

export const fetchBookList = bookCategoryName => async dispatch => {
  let response = null;
  try {
    response = await nyAPI.get(`current/${bookCategoryName}.json?api-key=${key}`);
    dispatch({
      type: 'FETCH_BOOKLIST',
      payload: {
        books: response.data,
        bookCategoryName
      }
    });
  } catch (e) {
    console.error('book list error', e, 'reponse', e.response);
    console.error('book list error', e, 'message', e.message);
    dispatch({
      type: 'FETCH_BOOKLIST_ERROR',
      payload: {
        apiErrorMessage: `${e.message} occurred.`,
        appErrorMessage: 'Please check the network and refresh the page.'
      }
    });
  }
};

export const updateWrapperTitle = title => {
  return {
    type: 'UPDATE_WRAPPER_TITLE',
    payload: { title: title || '' }
  };
};

export const switchOnOrOffMessageComponent = name => {
  return {
    type: 'SWITCH_MESSAGE_COMPONENT',
    payload: { componentName: name || '' }
  };
};
