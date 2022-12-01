import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent {
userid=""
id=""
title=""
status=""

add=()=>
{
  let todo:any={"userid":this.userid,"id":this.id,"title":this.title,
  "status":this.status

  }
console.log(todo)}
}
