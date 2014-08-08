using AngularJSDemo.API.APIModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace AngularJSDemo.API.APIControllers
{
    public class CustomerController : ApiController
    {
        Customer[] customers = new Customer[]
        {
            new Customer(){ID = 1, Name = "Melih Ozturk", City = "Trabzon", Under25= true},
            new Customer(){ID = 2, Name = "Sinem Ozturk", City = "Diyarbakir", Under25= false},
        };

        public IEnumerable<Customer> GetAllCustomers()
        {   
            return customers;
        }

        public IHttpActionResult GetCustomerByID(int customerID)
        {
            var customer = customers.FirstOrDefault<Customer>(p => p.ID == customerID);

            if (customer == null)
                return NotFound();

            return Ok(customer);
        }
    }
}
