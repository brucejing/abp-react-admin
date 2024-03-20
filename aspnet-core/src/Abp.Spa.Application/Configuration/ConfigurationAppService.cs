using System.Threading.Tasks;
using Abp.Authorization;
using Abp.Runtime.Session;
using Abp.Spa.Configuration.Dto;

namespace Abp.Spa.Configuration
{
    [AbpAuthorize]
    public class ConfigurationAppService : SpaAppServiceBase, IConfigurationAppService
    {
        public async Task ChangeUiTheme(ChangeUiThemeInput input)
        {
            await SettingManager.ChangeSettingForUserAsync(AbpSession.ToUserIdentifier(), AppSettingNames.UiTheme, input.Theme);
        }
    }
}
