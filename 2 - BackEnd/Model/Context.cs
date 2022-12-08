namespace Model;

using Microsoft.EntityFrameworkCore;

public class Context: DbContext
{
    public DbSet<Cliente> Clientes {get;set;}

    public DbSet<Concessionarias> Concessionarias {get;set;}
    public DbSet<Automoveis> Automoveis{get;set;}
    public DbSet<Alocacao> Alocacao {get;set;}

    protected override void OnConfiguring( DbContextOptionsBuilder optionsBuilder)
    {

        if(!optionsBuilder.IsConfigured)
        {
            var servername = Environment.MachineName;
            optionsBuilder.UseSqlServer($"Data Source={servername}\\TEW_SQLEXPRESS;Initial Catalog=SAEP; Integrated Security=True;Encrypt=false;TrustServerCertificate=true");
        }
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Cliente>(entity=>
            {
                entity.HasKey(e => e.ID);
                entity.Property(e => e.Nome);
            }
        );

        modelBuilder.Entity<Concessionarias>(entity => 
        {
            entity.HasKey(prop => prop.ID);
            entity.Property( prop => prop.Nome);
        });

        modelBuilder.Entity<Automoveis>(entity =>
        {
            entity.HasKey(prop=> prop.ID);
            entity.Property(prop=> prop.Modelo);
            entity.Property(prop=> prop.Preco);
        });

        modelBuilder.Entity<Alocacao>(entity =>
        {
            entity.HasKey(prop=>  prop.ID);
            entity.Property(a => a.Area);
            entity.HasOne(d => d.Automovel);
            entity.HasOne(d => d.Concessionaria);
            entity.Property(d => d.Quantidade);
        });
    }
}