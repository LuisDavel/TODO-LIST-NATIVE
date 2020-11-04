import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'sign-in',  // Hierarquia superior
    templateUrl: './sign-in.component.html', // Pagina que o script vai rodar
    moduleId: module.id
})

export class SignInComponent {
    
    public constructor(private router: Router){

    }
    
    public signInUser(){
        this.router.navigate(['/tasks']); // Redireciona para a parte de tarefas
    }

    public createAccount(){
        alert('Criar conta!');
    }
}