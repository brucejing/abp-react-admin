using System.ComponentModel.DataAnnotations;

namespace Abp.Spa.Users.Dto
{
    public class ChangeUserLanguageDto
    {
        [Required]
        public string LanguageName { get; set; }
    }
}