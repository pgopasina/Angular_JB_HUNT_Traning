import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CrudComponent } from './crud/crud.component';
import { DataformComponent } from './dataform/dataform.component';
import { DatalistComponent } from './datalist/datalist.component';
import { GoogleMapsComponent } from './google-maps/google-maps.component';
import { ImageSliderComponent } from './image-slider/image-slider.component';
import { JbTask1Component } from './jb-task1/jb-task1.component';
import { LoginWithGoogleComponent } from './login-with-google/login-with-google.component';
import { ParametersComponent } from './parameters/parameters.component';
import { UrlValidationComponent } from './url-validation/url-validation.component';

const routes: Routes = [
  // { path: '', component: HomeComponent },
  // {path: '', component: AppComponent,
  //   children: [
      { path: 'file', component: JbTask1Component },
      { path: 'image', component: ImageSliderComponent },
      { path: 'url', component: UrlValidationComponent },
      { path: 'crud', component: CrudComponent },
      { path: 'login2google', component: LoginWithGoogleComponent },
      { path: 'gmaps', component: GoogleMapsComponent },
      { path: 'dataForm', component: DataformComponent },
      { path: 'dataList', component: DatalistComponent },
      { path: 'parameters/:id/:name', component: ParametersComponent },
      { path: 'userProfile', loadChildren: () => import('./user-profile/user-profile.module').then(m => m.UserProfileModule) },
    ]
  // }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
