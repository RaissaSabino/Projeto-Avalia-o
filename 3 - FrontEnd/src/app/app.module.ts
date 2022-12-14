import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { AreasComponent } from './areas/areas.component';
import { DetalhesAreasComponent } from './detalhes-areas/detalhes-areas.component';
import { VendaAutomovelComponent } from './venda-automovel/venda-automovel.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    AreasComponent,
    DetalhesAreasComponent,
    VendaAutomovelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: '', component: AreasComponent},
      {path: 'detalhes/:areaID', component: DetalhesAreasComponent},
      {path: 'venda/:areaID/:automovelID', component: VendaAutomovelComponent}
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
