import { Component, OnInit } from '@angular/core';

export interface About{
  fname: string;
  lname: string;
  nickname: string;
  age: number;
  college: string;
  facebook: string;
  github: string;
  photo_profile: string;
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  about: About = {
    fname: 'Hudsawat',
    lname: 'Akkati',
    nickname: 'BossBoxing',
    age: 22,
    college: 'CS@KKU',
    facebook: 'Hudsawat Akkati',
    github: 'BossBoxing',
    photo_profile: 'https://cdn.discordapp.com/attachments/937281289340481647/971875938516238356/boss.jpg',
  };

  constructor() {  }

  ngOnInit(): void {
  }

}
