import { Component, OnInit } from '@angular/core';
import { PishingModel } from '../models/Pishing.model';
import Swal from 'sweetalert2';
import { PishingService } from '../services/Pishing.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-Pishing',
  templateUrl: './Pishing.component.html',
  styleUrls: ['./Pishing.component.css']
})
export class PishingComponent implements OnInit {

mostrarActualizar: boolean = false;
  pishingAll: PishingModel[] = [];
  id: number= 0;
  busqueda: string = '';
 searchTerm: string = '';
  searchText: string = '';
pishing: any[]=[];
private dataSubscription!: Subscription;

  constructor(private readonly PishingService: PishingService) { }

  async ngOnInit() {
    this.pishingAll = await this.PishingService.getPishing();
    this.createDataObservable();
  }


 private createDataObservable() {
    const dataObservable = new Observable<PishingModel[]>((observer) => {
      const fetchData = async () => {
        try {
          const data = await this.PishingService.getPishing();
          observer.next(data);
        } catch (error) {
          observer.error(error);
        }
      };
      const interval = setInterval(fetchData, 1000); 
      return () => {
        clearInterval(interval);
      };
    });

    this.dataSubscription = dataObservable.subscribe({
      next: (data) => {
        this.pishingAll = data;
      },
      error: (error) => {
        Swal.fire({
          icon: "error",
          text: error.error.msg
        });
      }
    });
  }




  obtenerPishing() {
    this.PishingService.getPishing()
    .then((response: any) => {
      this.pishingAll = response.cont.pishingAll;
    })
    .catch((error: any) => {
      Swal.fire({
        icon: "error",
        text: error.error.msg
      });
    });
  }

  actualizar(idPishing: any) {
    this.id = idPishing;
    this.mostrarActualizar = true;
  }

  restableceRegistro(){
    this.mostrarActualizar = false;
    this.id;
            this.obtenerPishing();
        }

        eliminar(pishing: PishingModel)
        {
            Swal.fire({
            icon: "question",
    title: `Are you sure to delete?`,
    showCancelButton: true,
    confirmButtonText: 'Yes',
    cancelButtonText: "Cancel"
            }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed)
            {
                this.PishingService.deletePishing(pishing.pishId)
                .then((response: any) => {
                    Swal.fire({
                    icon: "info",
            text: "Successfully removed"
                    });
            this.obtenerPishing();
        })
        .catch((error: any) => {
          Swal.fire({
            icon: "error",
            text: "Error updating Pishing."
          });
        })
      }
    })
  }


buscar(){
if (this.searchText === '') {
      this.pishingAll = this.pishing;
    } else {
      // Filtra los empleados según el texto de búsqueda
      this.pishingAll = this.pishing.filter(pishing => 
        pishing.pishId.toLowerCase().includes(this.searchText.toLowerCase())
        )}
      }
    }