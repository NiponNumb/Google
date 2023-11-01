import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PishingModel } from '../models/Pishing.model';
import { PishingService } from '../services/Pishing.service';
import Swal from 'sweetalert2';

@Component({
 selector: 'app-Pishing-detail',
  templateUrl: './Pishing-detail.component.html',
  styleUrls: ['./Pishing-detail.component.css']
})
export class PishingDetailComponent implements OnInit {
@Input() id: number = 0;
        isNew: boolean = false;

        pishing: PishingModel = new PishingModel();
            @Output() emitChange: EventEmitter < any > = new EventEmitter();
            constructor(private readonly PishingService: PishingService) { }

  ngOnInit() : void {
    
    this.isNew = !this.id;

console.log(this.isNew);
    if(!this.isNew){
      this.PishingService.getPishingById(this.id)
        .then((response: any) => {
          this.pishing = response.cont.Pishing;
        })
        .catch(() => {});
    }
  }

  submitPishing(forma: NgForm){
    if (this.isNew)
    {
        this.PishingService.postPishing(this.pishing)
        .then((response: any) => {
            Swal.fire({
            icon: "success",
        text: "Pishing has been successfully registered"
            });
            // forma.reset();
            this.emitChange.emit();
        })
    .catch ((error: any) => {
            Swal.fire({
            icon: "error",
        text: "An error has occurred to register Pishing"
            });
        });
        } else
        {

            this.PishingService.putPishing(this.pishing, this.id)
            .then((response: any) => {
                Swal.fire({
                icon: "success",
        text: "Pishing has been successfully updated."
                });
                this.emitChange.emit();
            })
    .catch ((error: any) => {
                Swal.fire({
                icon: "error",
        text: "An error has occurred to update Pishing"
                });
            });
            }

        }

        limpiarForm(forma: NgForm){
            forma.reset();
        }

    }
    