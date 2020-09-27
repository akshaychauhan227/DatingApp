namespace DatingApp.API.Dtos
{
    public class UserForLoginDto   //from UI to DB...thats y ID is not here ...only username needed to login.
    {
        public string Username { get; set; }
        public string Password { get; set; }
        
    }
}