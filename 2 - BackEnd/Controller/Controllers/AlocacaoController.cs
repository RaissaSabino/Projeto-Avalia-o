using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Text.Json;
using Model;

namespace Controller.Controllers;

[ApiController]
[Route("[controller]")]
public class AlocacaoController: ControllerBase
{

    [HttpGet]
    [Route("GetAll")]
    public List<object> GetAll()
    {
        return Alocacao.GetAllArea().ToList();
    }

    [HttpPost]
    [Route("GetAllCarsAvaiable")]
    public List<Automoveis> GetAllCarsAvaiable([FromBody] int AreaID)
    {
        return Alocacao.GetAllCarsAvaiable(AreaID);
    }

    [HttpPost]
    [Route("GetAvaibleConcessionariaWithSpecificCarAndArea")]
    public List<Concessionarias> GetAvaibleConcessionariaWithSpecificCarAndArea([FromBody] Alocacao alocacao)
    {
        return Alocacao.GetAvailableConcessionariaWhereHaveSpecificCarAndArea(alocacao.Area, alocacao.Automovel.ID);
    }

    [HttpPut]
    [Route("SellCar")]
    public bool SellCar([FromBody] Alocacao alocacao)
    {
        return Alocacao.SellCar(alocacao.Automovel.ID, alocacao.Area, alocacao.Concessionaria.ID);
    } 
}