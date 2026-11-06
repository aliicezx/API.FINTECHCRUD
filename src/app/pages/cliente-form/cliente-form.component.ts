import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Cliente } from '../../model/cliente';
import { ClienteService } from '../../services/cliente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cliente-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './cliente-form.component.html',
  styleUrl: './cliente-form.component.css'
})
export class ClienteFormComponent {
  private clienteService = inject(ClienteService);
  private router = inject(Router);
  cliente: Cliente = {} as Cliente;
  confirmarSenha = "";

  salvar() {

    if (this.cliente.senha !== this.confirmarSenha) {
      alert('As senhas não são iguais.');
      return;
    }
    this.clienteService.incluir(this.cliente.id).subscribe({
      next: (cliente)=> {
        alert(`cliente ${cliente.nome} criado com id ${cliente.id}`);
        this.router.navigate(["/admin-clientes-listar"])
      }
    });
  }
}