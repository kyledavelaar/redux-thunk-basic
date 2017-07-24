export function itemsHasErrored(bool) {
  return {
    type: 'ITEMS_HAS_ERRORED',
    hasErrored: bool
  };
}

export function itemsIsLoading(bool) {
  return {
    type: 'ITEMS_IS_LOADING',
    isLoading: bool
  };
}

export function itemsFetchDataSuccess(items) {
  return {
    type: 'ITEMS_FETCH_DATA_SUCCESS',
    items: items
  };
}

//call the 3 above action creators thru this action creator 
export function itemsFetchData(url) {
  return (dispatch) => {
    dispatch(itemsIsLoading(true));

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        dispatch(itemsIsLoading(false));
        return response;
      })
      .then((response) => response.json())
      .then((items) => dispatch(itemsFetchDataSuccess(items)))
      .catch(() => dispatch(itemsHasErrored(true)));
  }
}



//INSTEAD OF USING THIS FUNCTION IN APP.JS DIRECLTY CHANGING LOCAL STATE, WE USE THE ACTION CREATOR ABOVE (itemsFetchData) THAT ACCESSES OUR OTHER ACTION CREATORS

  // fetchData(url) {
  //   this.setState({ isLoading: true });
  //   fetch(url)
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw Error(response.statusText);
  //       }
  //       this.setState({ isLoading: false });
  //       return response;
  //     })
  //     .then((response) => response.json())
  //     .then((items) => this.setState({ items })) // ES6 property value shorthand for { items: items }
  //     .catch(() => this.setState({ hasErrored: true }));
  // }