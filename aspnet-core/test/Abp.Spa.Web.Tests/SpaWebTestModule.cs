using Abp.AspNetCore;
using Abp.AspNetCore.TestBase;
using Abp.Modules;
using Abp.Reflection.Extensions;
using Abp.Spa.EntityFrameworkCore;
using Abp.Spa.Web.Startup;
using Microsoft.AspNetCore.Mvc.ApplicationParts;

namespace Abp.Spa.Web.Tests
{
    [DependsOn(
        typeof(SpaWebMvcModule),
        typeof(AbpAspNetCoreTestBaseModule)
    )]
    public class SpaWebTestModule : AbpModule
    {
        public SpaWebTestModule(SpaEntityFrameworkModule abpProjectNameEntityFrameworkModule)
        {
            abpProjectNameEntityFrameworkModule.SkipDbContextRegistration = true;
        } 
        
        public override void PreInitialize()
        {
            Configuration.UnitOfWork.IsTransactional = false; //EF Core InMemory DB does not support transactions.
        }

        public override void Initialize()
        {
            IocManager.RegisterAssemblyByConvention(typeof(SpaWebTestModule).GetAssembly());
        }
        
        public override void PostInitialize()
        {
            IocManager.Resolve<ApplicationPartManager>()
                .AddApplicationPartsIfNotAddedBefore(typeof(SpaWebMvcModule).Assembly);
        }
    }
}