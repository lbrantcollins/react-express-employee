import React from 'react';

class CreateEmployee extends React.Component {
	constructor() {
		super();

		this.state = {
			name: '',
			position: '',
			birthDate: '',
			department: '',
			annualSalary: 0
		}
	}

	updateEmployee = (e) => {
		this.setState({
			[e.currentTarget.name] : e.currentTarget.value
		})
	}

	render() {

		return (
			<div>
				<h1>Add employee to payroll: </h1>
				<form>
					<label htmlFor='name'>
						<input type='text' name='name' onChange={this.updateEmployee} value={this.name}></input>
					</label>
					<label htmlFor='position'>
						<input type='text' name='position' onChange={this.updateEmployee} value={this.position}></input>
					</label>
					<label htmlFor='birthDate'>
						<input type='dateTime' name='birthDate' onChange={this.updateEmployee} value={this.birthDate}></input>
					</label>
					<label htmlFor='department'>
						<input type='text' name='department' onChange={this.updateEmployee} value={this.department}></input>
					</label>
					<label htmlFor='annualSalary'>
						<input type='number' name='annualSalary' onChange={this.updateEmployee} value={this.annualSalary}></input>
					</label>
				</form>
			</div>
		);

	}

}

export default CreateEmployee;
