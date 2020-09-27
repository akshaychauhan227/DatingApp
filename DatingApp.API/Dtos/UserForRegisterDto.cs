using System;
using System.ComponentModel.DataAnnotations;
namespace DatingApp.API.Dtos
{
    public class UserForRegisterDto             //from UI to DB...thats y ID is not here..now it will get created.
    {
        [Required]
        public string Username { get; set; }
        
        [Required]
        [StringLength(10, MinimumLength=6, ErrorMessage="Password shud be between 4 to 8 characters")]

        public string Password { get; set; }
        
        [Required]
        public string Gender { get; set; }

        [Required]
        public string KnownAs { get; set; }

        [Required]
        public DateTime DateOfBirth { get; set; }

        [Required]
        public string City { get; set; }

        [Required]
        public string Country { get; set; }

        [Required]
        public DateTime Created { get; set; }

        [Required]
        public DateTime LastActive { get; set; }

        public UserForRegisterDto()
        {
            Created = DateTime.Now;
            LastActive = DateTime.Now;
        }
    }
}