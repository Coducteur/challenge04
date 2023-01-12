import { Component } from "@angular/core";
import { Routes } from "@angular/router";
import { MenuComponent } from "./menu/menu.component";
import { SignupComponent } from "./signup/signup.component";
import { UserprofileComponent } from "./userprofile/userprofile.component";

const ROUTES: Routes = [
    { path: 'signup', component: SignupComponent },
    { path: 'userprofile', component: UserprofileComponent },
    { path: '', component: UserprofileComponent }
]

export { ROUTES }