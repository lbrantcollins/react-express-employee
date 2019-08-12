import React from 'react';
import CreateEmployee from './CreateEmployee';
import ListEmployees from './ListEmployees';

class App extends React.Component {
   constructor() {
      super();

      this.state = {
         employees: [],
         loggedIn: false
      }
   }

   componentDidMount(){
    this.getEmployees();
  }

   // CREATE: Sebastian
   addEmployee = async (employee, e) => {
      e.preventDefault();
      console.log(employee, e, 'Inside of addEmployee');

      try {
        const createEmployee = await fetch('http://localhost:9000/api/v1/employees', {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify(employee),
            headers: {
              'Content-Type': 'application/json'
            }
        })
        console.log(createEmployee, '<<< fetched createEmployee');

        if (createEmployee.status !== 201) {
          console.log(createEmployee.status);
          throw Error('Resource not found...')
        }

        const createEmployeeResponse = await createEmployee.json();

        this.setState({
          employees: [...this.state.employees, createEmployeeResponse.data]
        })


      } catch (err) {
        console.log('Inside of addEmployee: ', err);
        return err
      }
   }

   // READ: Brant

   getEmployees = async () => {

    try {

       const responseGetEmployees = await fetch('http://localhost:9000/api/v1/employees');
       console.log(responseGetEmployees, ' responseGetEmployees');

       if (responseGetEmployees.status !== 200) {
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

  editEmployee = async (id, e) => {
    e.preventDefault();
    console.log("inside editEmployee");
  }

  deleteEmployee = async (id, e) => {
    e.preventDefault(); 

    try {
        const deletedEmployee = await fetch('http://localhost:9000/api/v1/employees/' + id, {
            method: 'DELETE',
            credentials: 'include',
        })
        console.log(deletedEmployee, '<<< fetched deletedEmployee');

        if (deletedEmployee.status !== 200) {
          console.log(deletedEmployee.status);
          throw Error('Resource not found...')
        }

        const deletedEmployeeResponse = await deletedEmployee.json();
        console.log("deletedEmployeeResponse");
        console.log(deletedEmployeeResponse);

      
        this.setState({
          employees: this.state.employees.filter((employee) => employee._id !== id)
        })


      } catch (err) {
        console.log('Inside of deleteEmployee: ', err);
        return err
      }
    
  }

   render() {

      return (

         <div className="App">


            {/* CREATE: Sebastian */}
            <CreateEmployee addEmployee={this.addEmployee} />

            {/* READ and DELETE: Brant */}
            <ListEmployees employees={this.state.employees} deleteEmployee={this.deleteEmployee} editEmployee={this.editEmployee}/>

            

         </div>

        );

   }
}


export default App;
