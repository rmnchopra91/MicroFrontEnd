import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Config, ApiService } from '../service/api.service';

@Component({
  selector: 'app-compatible-device',
  templateUrl: './compatible-device.component.html',
  styleUrls: ['./compatible-device.component.css']
})
export class CompatibleDeviceComponent implements OnInit {

  @Input() name: string;
  @Output() helloEvt: EventEmitter<string> = new EventEmitter();

  constructor(private api: ApiService) { }
  config: any;
  ngOnInit() {
  }

  showConfig() {
    this.api.getConfig().subscribe(
      (data: Config) => this.config = {
        heroesUrl: data['heroesUrl'],
        textfile:  data['textfile']
      }
    );
  }

}
