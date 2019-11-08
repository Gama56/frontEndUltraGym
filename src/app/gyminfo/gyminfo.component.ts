import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GymService } from '../api/gym.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-gyminfo',
  templateUrl: './gyminfo.component.html',
  styleUrls: ['./gyminfo.component.css']
})

export class GyminfoComponent implements OnInit {
  public gyms: any;
  public id_User: any;

  constructor(private gymService: GymService, private router: Router) { }

  ngOnInit() {
    this.id_User = localStorage.getItem('gym');
    console.log(this.id_User);
    this.gyms = this.gymService.getOneGym(4);
    console.log(this.gyms);
  }
 // this.gyms = this.gymService.getGyms();
}
