using System.Threading.Tasks;
using Abp.Application.Services;
using Abp.Spa.Sessions.Dto;

namespace Abp.Spa.Sessions
{
    public interface ISessionAppService : IApplicationService
    {
        Task<GetCurrentLoginInformationsOutput> GetCurrentLoginInformations();
    }
}
