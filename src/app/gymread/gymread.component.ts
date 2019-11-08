import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GymService } from '../api/gym.service';

@Component({
  selector: 'app-gymread',
  templateUrl: './gymread.component.html',
  styleUrls: ['./gymread.component.css']
})

export class GymreadComponent implements OnInit {
  gyms: any;

  @Input() mensaje: any;
  @Output() clickPost = new EventEmitter<number>();
  id_gym: number;

  constructor(private gymService: GymService) { }

  ngOnInit() {
    this.gyms = this.gymService.getGyms();
  }

  onClick() {
    this.id_gym = this.gyms.id;
    console.log('Clickeo' , this.gyms.id_Gym);
    this.clickPost.emit(this.mensaje.id_Gym);
  }

  escuchaClick( id: number ) {
    console.log('Clic en: ' , id);
  }
}


