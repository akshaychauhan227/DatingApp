using DatingApp.API.Models;
using Microsoft.EntityFrameworkCore;
namespace DatingApp.API.Data
{
    public class DataContext: DbContext
    {
        public DataContext(DbContextOptions<DataContext> options): base(options)
        {
            
        }

        //Creating a table name Value
        public DbSet<Value> Values { get; set; }
    }
}