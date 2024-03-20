using Abp.Application.Services.Dto;
using Abp.Spa.Controllers;
using Abp.Spa.Roles;
using Abp.Spa.Roles.Dto;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;

namespace Abp.Spa.Web.Host.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RolesController : SpaControllerBase
    {
        private readonly IRoleAppService _roleAppService;

        public RolesController(IRoleAppService roleAppService)
        {
            _roleAppService = roleAppService;
        }


        // GET: api/<RolesController>
        [HttpGet]
        public async Task<ActionResult<PagedResultDto<RoleDto>>> Get(string filter = "", string range = "", string sort = "")
        {
            //return new string[] { "value1", "value2" };
            return await _roleAppService.GetAllAsync(new PagedRoleResultRequestDto()
            { MaxResultCount = Int32.MaxValue, SkipCount = 0 });
        }

        // GET api/<RolesController>/5
        [HttpGet("{id}")]
        public async Task<ActionResult<RoleDto>> Get(int id)
        {
            return await _roleAppService.GetAsync(new EntityDto<int>(id));
        }

        // POST api/<RolesController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<RolesController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<RolesController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
