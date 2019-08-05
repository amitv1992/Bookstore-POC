import { combineReducers } from 'redux';

const initialState = {
  apiErrorMessage: '',
  appErrorMessage: '',
  title: 'My Books',
  isLoading: false,
  bookCategoryName: '',
  searchQuery: '',
  books: [],
  book_categories: [],
  isMessageComponentClicked: false,
  isBooksComponentClicked: true
};

const appDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_BOOKLIST':
      return {
        ...state,
        books: action.payload.books,
        isLoading: false,
        showSearchIndicator: true,
        bookCategoryName: action.payload.bookCategoryName,
        apiErrorMessage: '',
        appErrorMessage: ''
      };
    case 'FETCH_BOOKLIST_ERROR':
      return {
        ...state,
        isLoading: false,
        apiErrorMessage: action.payload.apiErrorMessage,
        appErrorMessage: action.payload.appErrorMessage
      };
    case 'FETCH_BOOK_CATEGORIES':
      return {
        ...state,
        book_categories: action.payload.book_categories,
        apiErrorMessage: '',
        appErrorMessage: ''
      };
    case 'FETCH_BOOK_CATEGORIES_ERROR':
      return {
        ...state,
        isLoading: false,
        apiErrorMessage: action.payload.apiErrorMessage,
        appErrorMessage: action.payload.appErrorMessage
      };

    case 'MODIFY_BOOK_CATEGORY_NAME':
      // To prevent calling BE when user clicks same category button again
      if (action.payload.bookCategoryName === state.bookCategoryName) {
        return state;
      }
      return {
        ...state,
        bookCategoryName: action.payload.bookCategoryName
      };

    case 'MODIFY_SEARCH_QUERY':
      if (action.payload.searchQuery === state.searchQuery) {
        return state;
      }
      return {
        ...state,
        searchQuery: action.payload.searchQuery
      };

    case 'UPDATE_WRAPPER_TITLE':
      return {
        ...state,
        title: action.payload.title
      };

    case 'SWITCH_BOOK_COMPONENT':
      return {
        ...state,
        isBooksComponentClicked: true,
        isMessageComponentClicked: false
      };
    case 'SWITCH_MESSAGE_COMPONENT':
      switch (action.payload.componentName) {
        case 'My messages':
          return {
            ...state,
            isMessageComponentClicked: true,
            isBooksComponentClicked: false
          };
        case 'My Books':
          return {
            ...state,
            isMessageComponentClicked: false,
            isBooksComponentClicked: true
          };
        default:
          return {
            ...state,
            isMessageComponentClicked: false,
            isBooksComponentClicked: false
          };
      }
    default:
      return state;
  }
};

export default combineReducers({
  appDataReducer
});
