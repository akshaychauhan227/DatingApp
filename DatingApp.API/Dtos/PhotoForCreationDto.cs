using System;
using Microsoft.AspNetCore.Http;

namespace DatingApp.API.Dtos
{
    public class PhotoForCreationDto
    {
        //these 3 things we will get from user.
        public IFormFile File { get; set; } //uploading this to cloudinary with some height and width
        public string Description { get; set; }
        public DateTime DateAdded { get; set; }
        
        
        //these 2 things we will be getting from the cloudinary.
        public string  PublicId { get; set; }
        public string Url { get; set; }

        public PhotoForCreationDto()
        {
            DateAdded= DateTime.Now;
        }
        
    }
}