import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { User } from "./user";

const API = environment.api;
@Injectable({
    providedIn:'root'
})
export class UserService{
    
    private usersData = new BehaviorSubject<User[]>([]);
    
    constructor(private http:HttpClient){}

    setUsersData(users: User[]): void {
        this.usersData.next(users);
    }

    getUsersData(): Observable<User[]> {
        return this.usersData.asObservable();
    }

    getAll():Observable<User[]>{
        let url = API + "/users"
        return this.http.get<User[]>(url);
    }

    create(user:User):Observable<User>{
        let url = API + "/users"
        return this.http.post<User>(url, user);
    }

    verifyCPF(user:User):Observable<boolean>{
        let url = API + "/users/verifyCPF"
        return this.http.post<boolean>(url, user);
    }
    verifyTelefone(user:User):Observable<boolean>{
        let url = API + "/users/verifyTelefone"
        return this.http.post<boolean>(url, user);
    }
    verifyCodNegocio(user:User):Observable<boolean>{
        let url = API + "/users/verifyCodNegocio"
        return this.http.post<boolean>(url, user);
    }
}