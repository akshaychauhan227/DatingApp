using System.Linq;
using System.Reflection.Metadata;
using AutoMapper;
using DatingApp.API.Dtos;
using DatingApp.API.Models;

namespace DatingApp.API.Controllers.Helpers
{
    public class AutomapperProfiles : Profile
    {   
        public AutomapperProfiles()
        {
            CreateMap<User,UserForListDto>()
            .ForMember(dest=>dest.PhotoUrl,opt => opt.MapFrom(src =>src.Photos.FirstOrDefault(p=>p.IsMain).Url))
            .ForMember(dest=>dest.Age,opt=> opt.MapFrom(src=> src.DateOfBirth.CalculateAge()));
            
            CreateMap<User,UserForDetailedDto>()
            .ForMember(dest=>dest.PhotoUrl,opt => opt.MapFrom(src =>src.Photos.FirstOrDefault(p=>p.IsMain).Url))
            .ForMember(dest=>dest.Age,opt=> opt.MapFrom(src=> src.DateOfBirth.CalculateAge()));

            CreateMap<Photo, PhotosforDetailedDto>();
            CreateMap<UserForUpdateDto, User>();
            CreateMap<Photo, PhotoforReturnDto>();

            CreateMap<PhotoForCreationDto,Photo>();
            CreateMap<UserForRegisterDto,User>();
        }
    }
}