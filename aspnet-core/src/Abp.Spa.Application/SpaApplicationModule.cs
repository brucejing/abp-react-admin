using Abp.AutoMapper;
using Abp.Modules;
using Abp.Reflection.Extensions;
using Abp.Spa.Authorization;

namespace Abp.Spa
{
    [DependsOn(
        typeof(SpaCoreModule), 
        typeof(AbpAutoMapperModule))]
    public class SpaApplicationModule : AbpModule
    {
        public override void PreInitialize()
        {
            Configuration.Authorization.Providers.Add<SpaAuthorizationProvider>();
        }

        public override void Initialize()
        {
            var thisAssembly = typeof(SpaApplicationModule).GetAssembly();

            IocManager.RegisterAssemblyByConvention(thisAssembly);

            Configuration.Modules.AbpAutoMapper().Configurators.Add(
                // Scan the assembly for classes which inherit from AutoMapper.Profile
                cfg => cfg.AddMaps(thisAssembly)
            );
        }
    }
}
