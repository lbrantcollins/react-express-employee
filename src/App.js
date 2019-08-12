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
   addEmployee = async (employee, e) => {
      e.preventDefault
      console.log(employee, e, 'Inside of addEmployee');

      try {
        const createEmployee = await fetch('http://localhost9000/api/v1/employees', {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify(employee),
            headers: {
              'Content-Type': 'application/json'
            }
        })
        console.log(createEmployee, '<<< fetched createEmployee');

        if (createEmployee.status !== 200) {
          throw Error('Resource not found...')
        }

        const createEmployeeResponse = createEmployee.json();

        this.setState({
          employees: [...this.state.employees, createEmployeeResponse.data]
        })


      } catch (err) {
        console.log('Inside of addEmployee: ', err);
        return err
      }
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
