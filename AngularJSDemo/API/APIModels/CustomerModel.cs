using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AngularJSDemo.API.APIModels
{
    public class Customer
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public string City { get; set; }
        public bool Under25 { get; set; }
    }
}