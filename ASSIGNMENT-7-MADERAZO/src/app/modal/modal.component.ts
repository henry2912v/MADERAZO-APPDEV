import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent  implements OnInit {

 
 
  constructor(private modalcontroller: ModalController) { }

async closemodal(){
await this.modalcontroller.dismiss();  
}



  ngOnInit() {}

}
