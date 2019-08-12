import React from 'react'

 const EditEmployee = (props) => {
  console.log('Edit employee');
  return (
    <div>
      <h1>Edit Employee: </h1>
      <form onSubmit={props.editEmployee}>
        <label htmlFor='name'>
          <input type='text' name='name' onChange={props.handleFormChange} value={props.employeeToEdit.name} placeholder='name'></input>
        </label>
        <label htmlFor='position'>
          <input type='text' name='position' onChange={props.handleFormChange} value={props.employeeToEdit.position} placeholder='position'></input>
        </label>
        <label htmlFor='birthDate'>
          <input type='dateTime' name='birthDate' onChange={props.handleFormChange} value={props.employeeToEdit.birthDate} placeholder='birthDate'></input>
        </label>
        <label htmlFor='department'>
          <input type='text' name='department' onChange={props.handleFormChange} value={props.employeeToEdit.department} placeholder='department'></input>
        </label>
        <label htmlFor='annualSalary'>
          <input type='number' name='annualSalary' onChange={props.handleFormChange} value={props.employeeToEdit.annualSalary} placeholder='annualSalary'></input>
        </label>
        <button type='submit'>Submit Changes</button>
      </form>
    </div>
  )
}

export default EditEmployee
