using Abp.Authorization;
using Abp.Spa.Authorization.Roles;
using Abp.Spa.Authorization.Users;

namespace Abp.Spa.Authorization
{
    public class PermissionChecker : PermissionChecker<Role, User>
    {
        public PermissionChecker(UserManager userManager)
            : base(userManager)
        {
        }
    }
}
