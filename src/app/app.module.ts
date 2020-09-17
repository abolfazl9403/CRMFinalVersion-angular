import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from './pages/component/sidebar/sidebar.component';
import { AdmindashboardComponent } from './pages/component/admindashboard/admindashboard.component';
import { MainAdminpageComponent } from './pages/main-adminpage/main-adminpage.component';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TableComponent } from './pages/component/table/table.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSortModule} from '@angular/material/sort';
import { TransactionListComponent } from './pages/component/transaction-list/transaction-list.component';
import { CheckBoxesComponent } from './pages/component/check-boxes/check-boxes.component';
import {RouterModule} from '@angular/router';
import { CostumerListComponent } from './pages/component/costumer-list/costumer-list.component';
import { DropDownComponent } from './pages/component/drop-down/drop-down.component';
import { CustomerListComponent } from './pathes/component/customer-list/customer-list.component';
import { SelectOptionComponent } from './pages/component/select-option/select-option.component';
import {MatSelectModule} from '@angular/material/select';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DepositListComponent} from './pages/component/deposit-list/deposit-list.component';
import { LoginComponent } from './pages/login/login.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { CardsComponent } from './pages/component/cards/cards.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { SupportComponent } from './pages/support/support.component';
import { MessageComponent } from './pages/message/message.component';
import { BtnComponent } from './pages/component/btn/btn.component';
import {DynamicTableModule} from 'material-dynamic-table';

import { KeysPipe } from './pipe/keys.pipe';
import { DCardsComponent } from './pages/component/d-cards/d-cards.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    AdmindashboardComponent,
    MainAdminpageComponent,
    TableComponent,
    TransactionListComponent,
    CheckBoxesComponent,
    CostumerListComponent,
    DropDownComponent,
    CustomerListComponent,
    SelectOptionComponent,
    LoginComponent,
    CardsComponent,
    ReportsComponent,
    SupportComponent,
    MessageComponent,
    BtnComponent,
    KeysPipe,
    DepositListComponent,
    DCardsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ButtonsModule,
    BsDropdownModule,
    MatPaginatorModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatGridListModule,
    FormsModule,
    RouterModule.forRoot([{
      path: 'user', component: CostumerListComponent
    }, {
      path: 'transAction', component: TransactionListComponent
    }, {
      path: 'deposit', component: DepositListComponent
    }, ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
