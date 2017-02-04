using System;
using System.Collections.Generic;
using System.Linq;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity.ModelConfiguration;
using Domain;

    
namespace DataAccess.Configurations
{
    public class CategoryConfiguration : EntityTypeConfiguration<Category>
    {
        public CategoryConfiguration()
        {
            HasKey(c => c.CategoryID);
            Property(c => c.CategoryID).HasDatabaseGeneratedOption(DatabaseGeneratedOption.None);

        }
    }
}
