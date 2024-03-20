using Abp.Application.Services.Dto;
using Abp.Spa.Controllers;
using Abp.Spa.MultiTenancy;
using Abp.Spa.MultiTenancy.Dto;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;

namespace Abp.Spa.Web.Host.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TenantsController : SpaControllerBase
    {
        private readonly ITenantAppService _tenantAppService;

        public TenantsController(ITenantAppService tenantAppService)
        {
            _tenantAppService = tenantAppService;
        }


        // GET: api/<TenantsController>
        [HttpGet]
        public async Task<ActionResult<PagedResultDto<TenantDto>>> Get(string filter = "", string range = "", string sort = "")
        {
            //return new string[] { "value1", "value2" };
            return await _tenantAppService.GetAllAsync(new PagedTenantResultRequestDto()
            { MaxResultCount = Int32.MaxValue, SkipCount = 0 });
        }

        // GET api/<TenantsController>/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TenantDto>> Get(int id)
        {
            return await _tenantAppService.GetAsync(new EntityDto<int>(id));
        }

        // POST api/<TenantsController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<TenantsController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<TenantsController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
