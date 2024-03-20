using Abp.Application.Services.Dto;
using Abp.Spa.Controllers;
using Abp.Spa.Users;
using Abp.Spa.Users.Dto;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;

namespace Abp.Spa.Web.Host.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : SpaControllerBase
    {
        private readonly IUserAppService _userAppService;

        public UsersController(IUserAppService userAppService)
        {
            _userAppService = userAppService;
        }


        // GET: api/<UsersController>
        [HttpGet]
        public async Task<ActionResult<PagedResultDto<UserDto>>> Get(string filter = "", string range = "", string sort = "")
        {
            //return new string[] { "value1", "value2" };
            return await _userAppService.GetAllAsync(new PagedUserResultRequestDto()
            { MaxResultCount = Int32.MaxValue, SkipCount = 0 });
        }

        // GET api/<UsersController>/5
        [HttpGet("{id}")]
        public async Task<ActionResult<UserDto>> Get(int id)
        {
            return await _userAppService.GetAsync(new EntityDto<long>(id));
        }

        // POST api/<UsersController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<UsersController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<UsersController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
