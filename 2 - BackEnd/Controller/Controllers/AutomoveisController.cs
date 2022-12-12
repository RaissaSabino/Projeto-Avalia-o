using Microsoft.AspNetCore.Mvc;
using System.Text.Json;
using Model;

namespace Controller.Controllers;

[ApiController]
[Route("[controller]")]
public class AutomovelController: ControllerBase
{

    [HttpGet]
    [Route("Get/{AutomovelID}")]
    public IActionResult GetAutomovel(int AutomovelID)
    {
        return Automoveis.Get(AutomovelID);
    }
}