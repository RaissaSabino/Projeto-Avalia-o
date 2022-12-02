namespace Model;

public class Alocacao
{
    public int ID { get; set; }
    public int Area { get; set; }
    public Automoveis Automovel {get;set;}
    public Concessionarias Concessionaria {get; set;}
    public int Quantidade { get; set; }
}