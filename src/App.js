import React, { Component } from 'react';
import './App.css';
//import Qcocomponents from './components/Qcocomponents/Qcocomponents';
import Qcocomponent from './components/Qcocomponent/Qcocomponent';

class App extends Component {
  state = {
    qcocomponents : [
      {moduleNumber:'10',styleNumber:'11156237',numberOfMachinesFromBelt:'2',numberOfCheckedMachines:'2',numberOfSetMachines:'1'},
      {moduleNumber:'20',styleNumber:'P3303',numberOfMachinesFromBelt:'5',numberOfCheckedMachines:'2',numberOfSetMachines:'3'},
      {moduleNumber:'34',styleNumber:'11170854',numberOfMachinesFromBelt:'8',numberOfCheckedMachines:'2',numberOfSetMachines:'5'},
      {moduleNumber:'34',styleNumber:'11170854',numberOfMachinesFromBelt:'8',numberOfCheckedMachines:'2',numberOfSetMachines:'5'},
      {moduleNumber:'34',styleNumber:'11170854',numberOfMachinesFromBelt:'8',numberOfCheckedMachines:'2',numberOfSetMachines:'5'},
      {moduleNumber:'34',styleNumber:'11170854',numberOfMachinesFromBelt:'8',numberOfCheckedMachines:'2',numberOfSetMachines:'5'},
      {moduleNumber:'34',styleNumber:'11170854',numberOfMachinesFromBelt:'8',numberOfCheckedMachines:'2',numberOfSetMachines:'5'},
      {moduleNumber:'34',styleNumber:'11170854',numberOfMachinesFromBelt:'8',numberOfCheckedMachines:'2',numberOfSetMachines:'5'},
    ]
  };
  
  render(){
    let qco = null;
    qco = (
      <div>
        {this.state.qcocomponents.map(qcocomponent=>{
          return <Qcocomponent 
          moduleNumber ={qcocomponent.moduleNumber}
          styleNumber = {qcocomponent.styleNumber}
          numberOfMachinesFromBelt ={qcocomponent.numberOfMachinesFromBelt}
          numberOfCheckedMachines = {qcocomponent.numberOfCheckedMachines}
          numberOfSetMachines = {qcocomponent.numberOfSetMachines}

          />
        })}
      </div>
    );

  return (
    <div className="App">
      {qco}
    </div>
  );
  }
}

export default App;
