import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { itemsFetchData } from './actions/items';

class App extends Component {

  render() {
    if (this.props.hasErrored) {
      return <p>Sorry! There was an error loading the items</p>;
    }
    if (this.props.isLoading) {
      return <p>Loading…</p>;
    }
    return (
      <ul>
        {this.props.items.map((item) => (
          <li key={item.id}>
            {item.label}
          </li>
        ))}
      </ul>
    );
  }

  componentDidMount() {
    this.props.fetchData('http://5826ed963900d612000138bd.mockapi.io/items');
  }
  
}

function mapStateToProps(state) {
    return {
      items: state.items,
      hasErrored: state.itemsHasErrored,
      isLoading: state.itemsIsLoading
    }
  }

function mapDispatchToProps(dispatch) {
    return {
      fetchData: (url) => dispatch(itemsFetchData(url))
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(App);
