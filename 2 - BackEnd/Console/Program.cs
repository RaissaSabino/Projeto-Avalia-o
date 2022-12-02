// See https://aka.ms/new-console-template for more information
using Model;

// using (var context = new Context()){
//     context.Database.EnsureCreated();
// }

//var lista = Alocacao.GetAllArea();
//foreach(var teste in lista)
//{
//    Console.WriteLine(teste);
//}


//var lista = Alocacao.GetAllCarsAvaiable(10);
//foreach (var item in lista)
//{
//    Console.WriteLine(item.Modelo);
//}



//var lista = Alocacao.GetAvailableConcessionariaWhereHaveSpecificCarAndArea(1, 1);

//foreach (var item in lista)
//{
//    Console.WriteLine(item.ID);
//}

var teste = Alocacao.SellCar(1, 1, 1);

Console.WriteLine(teste);



