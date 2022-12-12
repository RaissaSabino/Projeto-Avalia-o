import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AreasComponent } from './areas/areas.component';
import { DetalhesAreasComponent } from './detalhes-areas/detalhes-areas.component';
import { VendaAutomovelComponent } from './venda-automovel/venda-automovel.component';

const routes: Routes = [
  {path: '', component: AreasComponent},
  {path: 'detalhes/:areaID', component: DetalhesAreasComponent},
  {path: 'venda/:areaID/:automovelID', component: VendaAutomovelComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
