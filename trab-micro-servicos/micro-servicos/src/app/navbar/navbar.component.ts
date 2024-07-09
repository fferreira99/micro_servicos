//TS base
import { DialogModule } from 'primeng/dialog';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { RippleModule } from 'primeng/ripple';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    standalone: true,
    imports: [MenubarModule, BadgeModule, AvatarModule, InputTextModule, RippleModule, CommonModule, DialogModule]
})

/*
export class NavbarComponent implements OnInit {
    items: MenuItem[] | undefined;

    ngOnInit() {
        this.items = [
            {
                label: 'Criar',
            },
            {
                label: 'Consultar',
            },
            {
                label: 'Atualizar'
            },
            {
                label: 'Excluir',
            }
        ];
    }
}
*/

export class NavbarComponent implements OnInit {
  items: MenuItem[] = [];
  displayCreate: boolean = false;
  displayRead: boolean = false;
  displayUpdate: boolean = false;
  displayDelete: boolean = false;

  ngOnInit() {
    this.items = [
      { label: 'Criar', command: () => this.openCreateModal() },
      { label: 'Consultar', command: () => this.openReadModal() },
      { label: 'Atualizar', command: () => this.openUpdateModal() },
      { label: 'Excluir', command: () => this.openDeleteModal() }
    ];
  }

  openCreateModal() {
    this.displayCreate = true;
  }

  openReadModal() {
    this.displayRead = true;
  }

  openUpdateModal() {
    this.displayUpdate = true;
  }

  openDeleteModal() {
    this.displayDelete = true;
  }

  closeCreateModal() {
    this.displayCreate = false;
  }

  closeReadModal() {
    this.displayRead = false;
  }

  closeUpdateModal() {
    this.displayUpdate = false;
  }

  closeDeleteModal() {
    this.displayDelete = false;
  }

  createUser() {
    // Lógica para criar usuário
    this.closeCreateModal();
  }

  readUser() {
    // Lógica para consultar usuário
    this.closeReadModal();
  }

  updateUser() {
    // Lógica para atualizar usuário
    this.closeUpdateModal();
  }

  deleteUser() {
    // Lógica para excluir usuário
    this.closeDeleteModal();
  }
}
