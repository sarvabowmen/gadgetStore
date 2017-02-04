using System;
using System.Collections.Generic;
using System.Linq;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity.ModelConfiguration;
using Domain;

namespace DataAccess.Configurations
{
    public class OrderConfiguration :  EntityTypeConfiguration<Order>
    {
        public OrderConfiguration()
        {
            Ignore(o => o.Gadgets);

        }
    }
}
