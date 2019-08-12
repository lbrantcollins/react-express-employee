import React from 'react';

const ListEmployees = (props) => {
	console.log(props, ' < props passed in to ListEmployees');

	const employeeList = props.employees.map((employee) => {
		return (
			<li key={employee._id}>
				<span>Name: {employee.name}</span>
				<br />
				<span>Position: {employee.position}</span>
				<br />
				<span>Birth date: {employee.birthDate}</span>
				<br />
				<span>Department: {employee.department}</span>
				<br />
				<span>Salary: {employee.annualSalary}</span>
				<br />
				<button onClick={props.showEditModal.bind(null, employee)}>Edit</button>
				<button onClick={props.deleteEmployee.bind(null, employee._id)}>Delete</button>
			</li>
		);
	})

	return (
		<ul>
			{employeeList}
		</ul>
	);
}

export default ListEmployees;
