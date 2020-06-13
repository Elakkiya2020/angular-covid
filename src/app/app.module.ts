import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';



import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CovidService } from './covid.service';
import { TopBarComponent } from './top-bar/top-bar.component';
import { HomeComponent } from './home/home.component';
import { WorldComponent } from './world/world.component';
import { TamilnaduComponent } from './tamilnadu/tamilnadu.component';



const routes: Routes = [
  {path:'top', component: TopBarComponent},
  {path:'home', component: HomeComponent},
  {path:'world', component: WorldComponent},
  {path:'Tamilnadu', component: TamilnaduComponent}
];

@NgModule({



  imports:      [ BrowserModule, FormsModule , HttpClientModule, RouterModule.forRoot(routes)],
  declarations: [ AppComponent, HelloComponent, HomeComponent, WorldComponent, TamilnaduComponent, TopBarComponent ],
  bootstrap:    [ AppComponent ],
  providers: [CovidService],  exports: [RouterModule]
  
})
export class AppModule { }
