import nyAPI from '../apis/nyAPI';
import { key } from '../apis/nyAPIKey';

const fetchBookCategories = () => async dispatch => {
  let response = null;
  try {
    response = await nyAPI.get(`names.json?api-key=${key}`);
    dispatch({
      type: 'FETCH_BOOK_CATEGORIES',
      payload: {
        book_categories: response.data
      }
    });
  } catch (e) {
    console.error('book categories list error', e, 'reponse', e.response);
    console.error('book categories list error', e, 'message', e.message);
    dispatch({
      type: 'FETCH_BOOK_CATEGORIES_ERROR',
      payload: {
        apiErrorMessage: `${e.message} occurred.`,
        appErrorMessage: 'Please check the network and refresh the page.'
      }
    });
  }
};
export default fetchBookCategories;
