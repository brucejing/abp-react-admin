using Abp.AspNetCore.Mvc.Controllers;
using Abp.IdentityFramework;
using Microsoft.AspNetCore.Identity;

namespace Abp.Spa.Controllers
{
    public abstract class SpaControllerBase: AbpController
    {
        protected SpaControllerBase()
        {
            LocalizationSourceName = SpaConsts.LocalizationSourceName;
        }

        protected void CheckErrors(IdentityResult identityResult)
        {
            identityResult.CheckErrors(LocalizationManager);
        }
    }
}
