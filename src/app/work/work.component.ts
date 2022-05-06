import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
//import { title } from 'process';
//import { Work } from './work';

interface Work{
  work_title: string;
  work_photo: string;
  work_desc: string;
}

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {

  work: Work = {
    work_title: 'My First Python Snippet',
    work_photo: 'https://cdn.discordapp.com/attachments/937281289340481647/971887144920559646/unknown.png',
    work_desc: 'My Hello World in Python',
  };

  constructor() { }

  ngOnInit(): void {
  }

}
