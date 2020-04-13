import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-legends',
  templateUrl: './legends.component.html',
  styleUrls: ['./legends.component.scss'],
})
export class LegendsComponent implements OnInit {
  legends: Object;
  constructor(private _http: HttpService) {}

  ngOnInit() {
    this._http.getLegends().subscribe((data) => {
      this.legends = data;
      console.log(this.legends);
    });
  }
}
