// See https://aka.ms/new-console-template for more information
using Model;

using (var context = new Context()){
    context.Database.EnsureCreated();
}