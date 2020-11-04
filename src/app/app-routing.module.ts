import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "@nativescript/angular";

import { SignInComponent } from "./pages/sign-in/sign-in.component";
import { TasksComponent } from "./pages/tasks/tasks.component";


const routes: Routes = [
    { path: "", redirectTo: "/items", pathMatch: "full" },
    { path: "sig-in", component: SignInComponent },
    { path: "tasks", component: TasksComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
