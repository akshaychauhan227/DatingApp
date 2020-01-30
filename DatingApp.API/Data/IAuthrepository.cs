using DatingApp.API.Models;
using System.Threading.Tasks;
namespace DatingApp.API.Data
{
    public interface IAuthrepository
    {
         Task<User> Register(User user, string password);
         Task<User> Login(string username, string password);
         Task<bool> UserExists(string username);

    }
}