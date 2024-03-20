using Abp.Application.Services;
using Abp.Spa.MultiTenancy.Dto;

namespace Abp.Spa.MultiTenancy
{
    public interface ITenantAppService : IAsyncCrudAppService<TenantDto, int, PagedTenantResultRequestDto, CreateTenantDto, TenantDto>
    {
    }
}

