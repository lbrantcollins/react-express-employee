import React from 'react';

const ListEmployees = (props) => {

	const employeeList = props.employees.map((employee) => {

		return (
			<li key={employee._id}>
				<span>Employee list will be here</span>
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
