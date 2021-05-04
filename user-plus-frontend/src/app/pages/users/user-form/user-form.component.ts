import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { finalize } from 'rxjs/operators';
import { User } from '../shared/user';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  maxRange = 1000000000000
  minRange = 1
  usersOld: User[]
  userForm: FormGroup
  isLoading = false
  constructor(public dialogRef: MatDialogRef<UserFormComponent>, private formBuilder: FormBuilder, private userService: UserService, private toastr: ToastrService) {
    this.userService.getUsersData().subscribe(users => this.usersOld = users)
  }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      nome: ['', Validators.required],
      cpf: ['', Validators.required],
      telefone: ['', Validators.required],
      cod_negocio: ['', Validators.required]
    })
  }

  get nome(): string {
    return this.userForm.get('nome').value
  }

  get cpf(): number {
    return this.userForm.get('cpf').value
  }

  get telefone(): number {
    return this.userForm.get('telefone').value
  }
  get cod_negocio(): number {
    return this.userForm.get('cod_negocio').value
  }

  register() {
    this.isLoading = true
    let isExistedCPF = true
    let isExistedTelefone = true
    let isExistedCodNegocio = true
    let user = new User(this.nome, this.cpf, this.telefone, this.cod_negocio)

    this.userService.verifyCPF(user).pipe(finalize(() => {
      if (!isExistedCPF) {
        this.userService.verifyTelefone(user).pipe(finalize(() => {
          if (!isExistedTelefone) {
            this.userService.verifyCodNegocio(user).pipe(finalize(() => {
              if (!isExistedCodNegocio) {
                this.isLoading = false
                this.userService.create(user).pipe(finalize(() => {
                  this.usersOld.push(user);
                  this.userService.setUsersData(this.usersOld);
                })).subscribe(() => {this.toastr.success("Usuário cadastrado", "Sucesso"), this.dialogRef.close()}, () => this.toastr.error("Impossivel registar", "Erro"))
              }
              else {
                this.isLoading = false
                this.toastr.warning("Codigo negocio já existe, por favor verificar", "Informação")
              }
            })).subscribe(CodNegocio => isExistedCodNegocio = CodNegocio)
          }
          else {
            this.isLoading = false
            this.toastr.warning("Telefone já existe, por favor verificar", "Informação")
          }
        })).subscribe(Telefone => isExistedTelefone = Telefone)
      }
      else {
        this.isLoading = false
        this.toastr.warning("CPF já existe, por favor verificar", "Informação")
      }
    })).subscribe(CPF => isExistedCPF = CPF)

  }
}
