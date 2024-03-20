using Abp.Application.Services.Dto;

namespace Abp.Spa.Roles.Dto
{
    public class PagedRoleResultRequestDto : PagedResultRequestDto
    {
        public string Keyword { get; set; }
    }
}

