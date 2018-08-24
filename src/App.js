import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import DBList from './components/DBList';

class App extends Component 
{
  constructor()
  {
    super()
    this.state =
    {
      list: []
    };
  }

  componentDidMount()
  {
    axios
      .get('/api/stuff')
      .then((response) => 
        {
          console.log(response);
          this.setState({list:response.data});
        }
      )
      .catch(err => console.log(`Error in ComponentDidMount() - ${err}`));
  }

  render() 
  {
    return (
      <div className="App">
      {
        this.state.list.map( (e, i) =>
          <DBList item={e.name} tagline={e.description} key={e.product_id}/>  
        )
      }
      </div>
    );
  }
}

export default App;
