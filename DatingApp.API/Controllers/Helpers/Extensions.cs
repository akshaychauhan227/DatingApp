using System;
using Microsoft.AspNetCore.Http;

namespace DatingApp.API.Controllers.Helpers
{
    public static class Extensions
    {
        public static void ApplicationError(this HttpResponse response, string message)
        {
            response.Headers.Add("Application-Error",message);
            response.Headers.Add("Access-Control-Expose-Headers","Application-Error");
            response.Headers.Add("Access-Control-Allow-Origin","*");
        }

        public static int CalculateAge(this DateTime d)
        {
            var age = DateTime.Today.Year - d.Year;
            if(d.AddYears(age)>DateTime.Today){age --;}
            return age;
        }
    }
}