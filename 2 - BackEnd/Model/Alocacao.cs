namespace Model;

public class Alocacao
{
    public int ID { get; set; }
    public int Area { get; set; }
    public Automoveis Automovel {get;set;}
    public Concessionarias Concessionaria {get; set;}
    public int Quantidade { get; set; }


    public static List<int> GetAllArea()
    {
        using(var context = new Context())
        {
            var Areas = context.Alocacao.Select(q => q.Area).Distinct().ToList();
            return Areas;
        }
    }

    public static List<Automoveis> GetAllCarsAvaiable(int Area)
    {
        using(var context = new Context())
        {
            var response = context.Alocacao.Where(q => q.Area == Area && q.Quantidade > 0).Select(q => q.Automovel).ToList();

            return response;
        }
    }

    public static List<Concessionarias> GetAvailableConcessionariaWhereHaveSpecificCarAndArea(int AreaID, int CarID)
    {
        using(var context = new Context())
        {
            var response = context.Alocacao.Where(q => q.Automovel.ID == CarID && q.Area == AreaID && q.Quantidade > 0).Select(q=>q.Concessionaria).ToList();
            return response;
        }
    }

    public static bool SellCar(int CarID, int AreaID,int ConcessionariaID)
    {

        using (var context = new Context())
        {
            var obj = context.Alocacao.Where(q => q.Automovel.ID == CarID && q.Area == AreaID && q.Concessionaria.ID == ConcessionariaID).Single();

            obj.Quantidade = obj.Quantidade - 1;
            context.SaveChanges();
            return true;

        }
    }
}