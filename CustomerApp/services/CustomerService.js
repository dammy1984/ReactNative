let service = {};

var customers = [
{id:1,name:'Vivek',email:'vivek@gmail.com'}
];

service.getCustomer = function(){
	return 	customers;
}

service.addCustomer = function(customer){
    customer.id = 1
	customers.push(customer);
}

service.updateCustomer = function(customer){
    for (var i = 0; i < customers.length; i++) {
    if(customers[i].id == customer.id){
      customers[i] = customer;
      return;
    }
  }
}

service.getCustomerById = function(id){
  for (var i = 0; i < customers.length; i++) {
    if(customers[i].id == id){
      return customers[i];
    }
  }
  return {};
}

service.deleteCustomer = function(id){
	let newCustomers = [];
    for (var i = 0; i < customers.length; i++) {
      if(customers[i].id != id){
        newCustomers.push(customers[i]);
      }
    }
    customers = newCustomers;
}

export default service;