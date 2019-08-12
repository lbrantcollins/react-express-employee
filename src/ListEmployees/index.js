import React from 'react';

const ListEmployees = (props) => {
	console.log(props, ' < props passed in to ListEmployees');

	const employeeList = props.employees.map((employee) => {
		return (
			<li >
				<span>Name: {employee.name}</span>
				<span>Position: {employee.position}</span>
				<span>Birth date: {employee.birthDate}</span>
				<span>Department: {employee.department}</span>
				<span>Salary: {employee.annualSalary}</span>
				<button onClick={props.editEmployee.bind(null, employee._id)}></button>
				<button onClick={props.deleteEmployee.bind(null, employee._id)}></button>
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
