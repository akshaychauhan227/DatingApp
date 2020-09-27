using System;

namespace DatingApp.API.Dtos
{
    public interface PhotoforReturnDto       //from db to UI thats y sending it with ID
    {
        public int Id { get; set; }
        public string Url { get; set; }
        public string Description { get; set; }
        public DateTime DateAdded { get; set; }
        public bool IsMain { get; set; }
        public string PublicId { get; set; }
    }
}