import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HearderComponent } from './components/hearder/hearder.component';
import { TodoButtonDeleteAllComponent } from './components/todo-button-delete-all/todo-button-delete-all.component';
import { TodoInputAddItemsComponent } from './components/todo-input-add-items/todo-input-add-items.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { HomeComponent } from './pages/home/home.component';



@NgModule({
  declarations: [
    HearderComponent,
    TodoButtonDeleteAllComponent,
    TodoInputAddItemsComponent,
    TodoListComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class HomeModule { }
