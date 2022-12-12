namespace Model;

public class Automoveis
{
    public int ID { get; set; } 
    public string Modelo { get; set; }
    public  double Preco {get;set;}

    public Automoveis GetAutomovel(int AutomovelID)
    {
        using var context =  new Context();
        return context.Automoveis.Single(q => q.ID = AutomovelID);
    }
}