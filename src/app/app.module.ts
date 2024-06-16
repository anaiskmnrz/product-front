import { registerLocaleData, CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import localeEn from '@angular/common/locales/en';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from 'app/app-routing.module';
import { AppComponent } from 'app/app.component';
import { BaseModule } from 'app/base/base.module';
import { SharedModule } from 'app/shared/shared.module';
import { ProductsAdminComponent } from './product/products-admin/products-admin.component';
import { ProductsComponent } from './product/products/products.component';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputNumberModule } from 'primeng/inputnumber';
import { TableModule, TableRadioButton } from 'primeng/table';
import { RippleModule } from 'primeng/ripple';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { FileUploadModule } from 'primeng/fileupload';
import { DropdownModule } from 'primeng/dropdown';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent, ProductsAdminComponent, ProductsComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    BaseModule,
    RouterModule,
    ConfirmDialogModule,
    DialogModule, 
    ButtonModule, 
    InputTextModule, 
    InputTextareaModule,
    InputNumberModule,
    TableModule, 
    ToastModule, 
    ToolbarModule, 
    RippleModule, 
    FormsModule, 
    TableModule, 
    FileUploadModule, 
    DropdownModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'en' },
    ConfirmationService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    registerLocaleData(localeEn, 'en');
  }
}
