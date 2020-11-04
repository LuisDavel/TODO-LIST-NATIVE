import { Component } from "@angular/core";
import { TextField } from "@nativescript/core";

@Component({
    selector: 'tasks',
    templateUrl: './tasks.component.html',
    moduleId: module.id
})

export class TasksComponent{
    public tasks: Array<string> = [
        "Comprar pão",
        "Estudar NativeScript",
        "Este aqui é pra ser Deletado"    
    ];

    public createTask(taskField: TextField){
        this.tasks.unshift(taskField.text);
        taskField.text = "";
    }

    public deleteTask(args){
        let taskIndex = args.index;
        this.tasks.splice(taskIndex, 1);
        alert('Tarefa removida!');
    }
    
}