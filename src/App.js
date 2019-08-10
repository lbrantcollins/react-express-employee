import React from 'react';
import CreateEmployee from './CreateEmployee';
import ListEmployees from './ListEmployees';

class App extends React.Component {
   constructor() {
      super();

      this.state = {
         employees: []
      }
   }

   // CREATE: Sebastian
   addEmployee = (employee, e) => {
      
   }

   // READ: Brant
   getEmployees = () => {
      
   }

   render() {

      return (

         <div className="App">

            {/* CREATE: Sebastian */}
            <CreateEmployee addEmployee={this.addEmployee}/>

            {/* READ: Brant */}
            <ListEmployees employees={this.state.employees}/>

         </div>

        );

   }
}


export default App;
