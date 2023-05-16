import { FileUploadModule } from 'primeng/fileupload';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ButtonModule } from 'primeng/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableModule } from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import { GalleriaModule } from 'primeng/galleria';
import { ImageSliderComponent } from './image-slider/image-slider.component';
import { ImageModule } from 'primeng/image';
import { UrlValidationComponent } from './url-validation/url-validation.component';
import { JbTask1Component } from './jb-task1/jb-task1.component';
import { CrudComponent } from './crud/crud.component';
import { LoginWithGoogleComponent } from './login-with-google/login-with-google.component';
import { environment } from '../environments/environment';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { CommonModule } from '@angular/common';
import { GoogleMapsModule } from '@angular/google-maps';
import { GoogleMapsComponent } from './google-maps/google-maps.component';
import { CardModule } from 'primeng/card';
import { DataformComponent } from './dataform/dataform.component';
import { RadioButtonModule } from 'primeng/radiobutton';
import { DatalistComponent } from './datalist/datalist.component';
import { ListboxModule } from 'primeng/listbox';
import { ErrorHandler, NgModule } from '@angular/core';
import { JbhuntserviceService } from './jbhuntservice.service';
import { InputNumberModule } from 'primeng/inputnumber';
import { MenuModule } from 'primeng/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Demo1Directive } from './appCustomDirectives/demo1.directive';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import { ParametersComponent } from './parameters/parameters.component';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
@NgModule({
  declarations: [
    AppComponent,
    ImageSliderComponent,
    UrlValidationComponent,
    JbTask1Component,
    CrudComponent,
    LoginWithGoogleComponent,
    GoogleMapsComponent,
    DataformComponent,
    DatalistComponent,
    Demo1Directive,
    ParametersComponent,
  ],
  imports: [
    ProgressSpinnerModule,
    BrowserAnimationsModule,
    MenuModule,
    CommonModule,
    InputNumberModule,
    CardModule,
    GoogleMapsModule,
    BrowserModule,
    AppRoutingModule,
    TableModule,
    ButtonModule,
    FileUploadModule,
    HttpClientModule,
    FormsModule,
    InputTextModule,
    GalleriaModule,
    ImageModule,
    ReactiveFormsModule,
    RadioButtonModule,
    ListboxModule,
    ScrollPanelModule,
    provideAuth(() => getAuth()),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
  ],
  schemas: [],
  providers: [JbhuntserviceService, ErrorHandler],
  bootstrap: [AppComponent]
})
export class AppModule { }
