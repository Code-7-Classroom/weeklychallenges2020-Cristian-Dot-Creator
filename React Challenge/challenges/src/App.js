import React from 'react';
import './App.css';
import Info from './BasicInfo/BasicInfo';

class App extends React.Component {
  constructor(props) {
    super() 
    this.state = {
      BasicInfo : [
          {name:'Cristian' , number: '111-111-1111', dob: '1998'},
          {name:'Khan' , number: '111-111-2222', dob: '1992'},
          {name:'Mark' , number: '111-111-3333', dob: '1993'}

      ]
    }
  }

  render() {
    return (
        <div className="App">
            {this.state.BasicInfo.map((person) => 
              
              <Info name={person.name} number={person.number} dob={person.dob}/>

            
            )}
  

        </div>


    )
  }
}

export default App;
