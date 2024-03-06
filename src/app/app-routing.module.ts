import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponentComponent } from './components/main-component/main-component.component';
import { SecoundComponent } from './components/secound/secound.component';
import { ChildComponent } from './components/child/child.component';

const routes: Routes = [
  { path: '', component: MainComponentComponent },
  {
    path: 'secound', component: SecoundComponent,
    children: [
      { path: 'child', component: ChildComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
