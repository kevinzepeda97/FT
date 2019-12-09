import { api, User } from "./my-fetch";
import $router from "../router/index";

export const Game_Server = {
    User,
    Login(username, password){
        return api('login')
    },
    Log_Stats(){
        return api('stats')
    },
    AddUser(){
        return api('User')
    },
    DeleteUser(User_Id){
        return api('')
    },
    Get_State(){
        return api('')
    }
}

export class Player {
    id;
    name;
    email;
    password;
    milesRan;
    steps;
    caloriesBurnt;
}