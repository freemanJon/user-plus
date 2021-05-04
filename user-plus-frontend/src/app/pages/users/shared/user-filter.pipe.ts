import { Pipe, PipeTransform } from "@angular/core";
import { User } from "./user";

@Pipe({
    name:'userFilter'
})
export class UserFilterPipe implements PipeTransform{
    transform(users: User[], searchTerm:number){
        if(!users || !searchTerm){
            return users
        }
        
        return users.filter(user => user.cod_negocio.toString().indexOf(searchTerm.toString()) !== -1)
    }
}