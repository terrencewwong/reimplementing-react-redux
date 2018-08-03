import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Provider, connect} from "./react-redux";


const state = {
    user: "Nikola",
    shoes: [
        {
            name: "Alberts",
            color: "white"
        },
        {
            name: "Jordans",
            color: "black"
        }
    ]
}


class App extends Component {
  render() {
      return (
              <Provider state={state}>
                <div className="App">
                    <User />
                    <div>
                        <h2>Favorite shoes</h2>
                        <Shoes active={true} shoes={[
                            {
                                name: "Adidas",
                                color: "blue"
                            }
                        ]}/>
                    </div>
                </div>
            </Provider>
    );
  }
}


const User = connect((state) => {
    return {
        user: state.user
    }
})(
    ({ user }) => (
        <h1>{user}</h1>
    )
)



const Shoes = connect((state, thineOwnProps) => {
    return {
        shoes: [ ...state.shoes, ...(thineOwnProps.shoes || [])]
    }
})(
    ({ active, shoes }) => (
        <ul style={{
            backgroundColor: active ? 'green' : ''
        }}>
            {shoes.map((shoe) => (
                <li>
                    {shoe.name}
                    color: {shoe.color}
                </li>
            ))}
        </ul>
    )
)
export default App;
