namespace Model;
public class Cliente
{
    public int ID {get;set;}
    public string Nome { get; set; }

    public static List<Cliente> GetAllClients()
    {
        using (var context = new Context())
        {
            var response =  context.Clientes.ToList();
            return response;
        }
    }
}
