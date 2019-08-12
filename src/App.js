import React from 'react';
import CreateEmployee from './CreateEmployee';
import ListEmployees from './ListEmployees';
import EditEmployee from './EditEmployee'
import Register from './Register'
import Login from './Login'
import Logout from './Logout'


class App extends React.Component {
   constructor() {
      super();

      this.state = {
         employees: [],

         loggedIn: false,

         editModalVisible: false,
         employeeToEdit: {
           _id: null,
           name: '',
           position: '',
           birthDate: '',
           department: '',
           salary: null
         }

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

  //UPDATE
  handleFormChange = (e) => {
    this.setState({
      employeeToEdit: {
      ...this.state.employeeToEdit,
      [e.target.name] : e.target.value
      }
    })
  }

  showEditModal = (employee) => {
    console.log('Edit modal now true');
    this.setState({
      employeeToEdit: employee,
      editModalVisible: true
    })
  }

  editEmployee = async (e) => {
    e.preventDefault();
    console.log("inside editEmployee");

    try {
      const editRequest = await fetch('http://localhost:9000/api/v1/employees/' + this.state.employeeToEdit._id, {
        method: 'PUT',
        credentials: 'include',
        body: JSON.stringify(this.state.employeeToEdit),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      console.log(editRequest, ' <<<<<<<<<<<<<<<<<< 1. editRequest');

      const editResponse = await editRequest.json()
      console.log(editResponse, ' <<<<<<<<<< 2. Edit Response');

      const editedEmployeeList = this.state.employees.map((employee) => {
        if (employee._id === editResponse.data._id) {
          employee = editResponse.data
        }
        return employee
      })
      console.log( editedEmployeeList, ' <<<<<<<<<< 3. editedEmployeeList');

      this.setState({
        employees: editedEmployeeList,
        editModalVisible: false
      })

    } catch (err) {
      console.dir(err)
      throw Error('Edit request denied')
    }


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

  loginStatus = () => {
    console.log("inside loginStatus");
    console.log("this.state.loggedIn ", this.state.loggedIn);
    this.setState({
      loggedIn: !this.state.loggedIn
    })
  }

   render() {

    console.log("this.state.loggedIn in render ", this.state.loggedIn);

      return (

         <div className="App">

         {this.state.loggedIn

          ? (
            <div>
              <Logout loginStatus={this.loginStatus}/>
              <CreateEmployee addEmployee={this.addEmployee} />

              <ListEmployees employees={this.state.employees} deleteEmployee={this.deleteEmployee} showEditModal={this.showEditModal}/>

              {this.state.editModalVisible ? <EditEmployee employeeToEdit={this.state.employeeToEdit} editEmployee={this.editEmployee}  handleFormChange= {this.handleFormChange}/> : null}
            </div>
            )
          :

          <div>
            <Login loginStatus={this.loginStatus}/>
            <Register loginStatus={this.loginStatus}/>
          </div>

        }






         </div>

        );

   }
}


export default App;
