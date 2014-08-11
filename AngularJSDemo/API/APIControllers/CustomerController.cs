using AngularJSDemo.API.APIModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;

namespace AngularJSDemo.API.APIControllers
{
    [RoutePrefix("api/customer")]
    public class CustomerController : ApiController
    {
        Customer[] customers = new Customer[]
        {
            new Customer(){ID = 1, Name = "Melih Ozturk", City = "Trabzon", Active= true},
            new Customer(){ID = 2, Name = "Sinem Ozturk", City = "Diyarbakir", Active= false},
        };

        [Route("")]
        public IEnumerable<Customer> GetAllCustomers()
        {   
            return customers;
        }

        // GET api/<controller>/5
        [Route("{id:int}")]
        [ResponseType(typeof(Customer))]
        public IHttpActionResult GetCustomerByID(int id)
        {
            var customer = customers.FirstOrDefault<Customer>(p => p.ID == id);

            if (customer == null)
                return NotFound();

            return Ok(customer);
        }
    }
}
