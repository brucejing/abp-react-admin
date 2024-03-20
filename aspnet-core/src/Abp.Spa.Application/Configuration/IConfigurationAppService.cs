using System.Threading.Tasks;
using Abp.Spa.Configuration.Dto;

namespace Abp.Spa.Configuration
{
    public interface IConfigurationAppService
    {
        Task ChangeUiTheme(ChangeUiThemeInput input);
    }
}
