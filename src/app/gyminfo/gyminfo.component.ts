import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GymService } from '../api/gym.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-gyminfo',
  templateUrl: './gyminfo.component.html',
  styleUrls: ['./gyminfo.component.css']
})

export class GyminfoComponent implements OnInit {
  gyms;
  datagyms;
  public id_User: any;

  constructor(private gymService: GymService, private router: Router) { }

  ngOnInit() {
    this.loadGyms();
  }

  loadGyms(){
    this.id_User = localStorage.getItem('gym');
    this.gyms = [];
    this.datagyms = [];
    console.log(this.id_User);


    this.gymService.getOneGym(this.id_User).subscribe(data =>{
      
      let array = [];
      const dataGym = Object.values(data);

      const gymsData = dataGym[0];
      this.datagyms = this.datagyms.concat(gymsData[0]);
      const coachData = dataGym[1];
      const ClassesData = dataGym[2];

      for (var i =0; i < coachData.length; i++){
        const newValue = {
          'IdCoach': coachData[i].id_Coach,
          'CoachName': coachData[i].coach_Name,
          'IdClass': '',
          'IdCoachClass': '',
          'ClassLimit': '',
          'ClassInscribed': '',
          'ClassName': '',
          'ClassDuration': '',
          'ClassHour': ''
        }
        this.gyms = this.gyms.concat(newValue);
        
      }
      
      
      for( var i = 0; i < ClassesData.length; i++){
        
          this.gyms.forEach(array => {
            if(array.IdCoach == ClassesData[i].id_Coach_Class){
              array.IdClass =  ClassesData[i].id_Class,
              array.IdCoachClass = ClassesData[i].id_Coach_Class,
              array.ClassLimit = ClassesData[i].class_Limit,
              array.ClassInscribed = ClassesData[i].class_Inscribed,
              array.ClassName = ClassesData[i].class_Name,
              array.ClassDuration = ClassesData[i].class_Duration,
              array.ClassHour = ClassesData[i].class_Hour
            }
          }); 
      }


        
        console.log(this.gyms);
        console.log(this.datagyms);
    });
   
    
  }
 // this.gyms = this.gymService.getGyms();
}
