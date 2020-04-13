import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-list',
  templateUrl: './weapons.component.html',
  styleUrls: ['./weapons.component.scss'],
})
export class WeaponsComponent implements OnInit {
  weapons: Object;

  constructor(private _http: HttpService) {}

  ngOnInit() {
    this._http.getWeapons().subscribe((data) => {
      this.weapons = data;
      console.log(this.weapons);
    });
  }
}
