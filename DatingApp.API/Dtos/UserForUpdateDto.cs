namespace DatingApp.API.Dtos
{
    public class UserForUpdateDto   //from UI to DB...thats y ID is not here it Comes with URL
    {
        public string Introduction { get; set; }
        public string LookingFor { get; set; }
        public string Interests { get; set; }
        public string City { get; set; }
        public string Country { get; set; }
    }
}