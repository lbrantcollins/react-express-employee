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
   getEmployees = async () => {

      try {

         const responseGetEmployees = await fetch('http://localhost:9000/api/v1/employees');
         console.log(responseGetEmployees, ' responseGetEmployees');

         if (responseGetEmployees.status != 200) {
            throw Error('404 from server');
         }
         
         const employeesResponse = await responseGetEmployees.json();
         console.log(employeesResponse, 'employeesResponse');

         this.setState({
            employees: [...employeesResponse.data]
         })

      } catch(err) {
         console.log(err, "getEmployess error");
         return err;
      }

      
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
