using Microsoft.EntityFrameworkCore;
using Abp.Zero.EntityFrameworkCore;
using Abp.Spa.Authorization.Roles;
using Abp.Spa.Authorization.Users;
using Abp.Spa.MultiTenancy;

namespace Abp.Spa.EntityFrameworkCore
{
    public class SpaDbContext : AbpZeroDbContext<Tenant, Role, User, SpaDbContext>
    {
        /* Define a DbSet for each entity of the application */
        
        public SpaDbContext(DbContextOptions<SpaDbContext> options)
            : base(options)
        {
        }
    }
}
