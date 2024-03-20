using System.Threading.Tasks;
using Abp.Application.Services;
using Abp.Spa.Authorization.Accounts.Dto;

namespace Abp.Spa.Authorization.Accounts
{
    public interface IAccountAppService : IApplicationService
    {
        Task<IsTenantAvailableOutput> IsTenantAvailable(IsTenantAvailableInput input);

        Task<RegisterOutput> Register(RegisterInput input);
    }
}
