const Employee = require('../models/employee');
const employeeCtrl = {}


employeeCtrl.getEmployees = async (req, res) => {
    const employees = await Employee.find();
    res.json(employees);
}

employeeCtrl.getEmployee = async (req, res) => {
    const employee = await Employee.findById(req.params.id);
    res.json(employee);
}

employeeCtrl.createEmployee = async (req, res) => {
    const newEmployee = new Employee(req.body);
    await newEmployee.save();
    res.json({
        'status': 'Empleado Guardado'
    });
}

employeeCtrl.editEmployee = async (req, res) => {
    const newDataEmployee = {
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary
    }
    await Employee.findByIdAndUpdate(req.params.id, { $set: newDataEmployee }, { new: true });
    res.json({
        'status': 'Empleado Actualizado'
    })
}

employeeCtrl.deleteEmployee = async (req, res) => {
    await Employee.findByIdAndDelete(req.params.id);
    res.json({
        'status': 'Empleado Eliminado'
    })
}

module.exports = employeeCtrl;