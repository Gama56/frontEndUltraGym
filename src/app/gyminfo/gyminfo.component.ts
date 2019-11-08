import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GymService } from '../api/gym.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-gyminfo',
  templateUrl: './gyminfo.component.html',
  styleUrls: ['./gyminfo.component.css']
})

export class GyminfoComponent implements OnInit {
  gyms: any;
  public id1: number;

  @Input() mensaje: any;
  @Output() clickPost = new EventEmitter<number>();
  id_gym: number;

  constructor(private gymService: GymService, private router: Router) { }

  ngOnInit() {
    this.gyms = this.gymService.getOneGym(this.id_gym);
  }

  Lectura( id1 )  {
    console.log(id1);
    this.router.navigate(['/gyminfo']);
  }
}
