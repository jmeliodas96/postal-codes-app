import React, { Component } from 'react';
import './App.css';
import { search } from "./utils";
import PostalCodes from "./components/postalCode/postalCodes";


class App extends Component {

  state = {
    data: null,
    loading: false,
    value: ''
  };

  search = async val => {
    this.setState({ loading: true });
    const res  = await search(
      `https://postal-code-api-b777e.ondigitalocean.app/postal-code-api/search?param=${val}`
    );
    const data = res;
    this.setState({ data, loading: false });
  };

  onChangeHandler = async e => {
    this.search(e.target.value);
    this.setState({ value: e.target.value });
    console.log(e.target.value);
  };

  get renderPostalCodes() {
    let data = <h2>No hay resultados!</h2>;
    if (this.state.data) {
      data = <PostalCodes list={this.state.data} />;
    }
    return data;
  }

  render() {
    return ( 
      <div className="App-container">
        <h1>Codigos Postales de Nicaragua</h1>
        <input
          className="App-code-input"
          value={this.state.value}
          onChange={e => this.onChangeHandler(e)}
          placeholder="Ingrese el departamento, muncipio, codigo postal....."
        />
        {this.renderPostalCodes}
      </div>
    )
  }

}

export default App;
