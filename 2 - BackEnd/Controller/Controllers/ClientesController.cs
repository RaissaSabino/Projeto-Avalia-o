using Microsoft.AspNetCore.Mvc;
using Model;

namespace Controller.Controllers;

[ApiController]
[Route("[controller]")]
public class ClienteController : ControllerBase
{

    [HttpGet]
    [Route("GetAll")]
    public IEnumerable<Cliente> GetAllClients()
    {
        return Cliente.GetAllClients();
    }


}