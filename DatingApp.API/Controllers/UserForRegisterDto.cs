using System.ComponentModel.DataAnnotations;
namespace DatingApp.API.Controllers
{
    public class UserForRegisterDto
    {
        [Required]
        [EmailAddress]
        public string Username { get; set; }


        [Required]
        [StringLength(10, MinimumLength=6, ErrorMessage="Password shud be between 4 to 8 characters")]
        [RegularExpression(@"^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!*@#$%^&+=]).*$", ErrorMessage="Password shud have only 1 uppercase 1 spcl char 1 number")]
        public string Password { get; set; }
    }
}