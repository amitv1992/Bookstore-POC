const modifySearchQuery = query => {
  return {
    type: 'MODIFY_SEARCH_QUERY',
    payload: { searchQuery: query }
  };
};

export default modifySearchQuery;
