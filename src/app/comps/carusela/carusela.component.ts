import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'carusela',
  templateUrl: './carusela.component.html',
  styleUrls: ['./carusela.component.css'],
  providers: [NgbCarouselConfig]
})
export class CaruselaComponent implements OnInit {

  images = [700, 800, 807].map((n) => `https://picsum.photos/id/${n}/900/500`);

  constructor(config: NgbCarouselConfig) { 
    config.interval = 20000;
    config.keyboard = true;
    config.pauseOnHover = true;
  }

  ngOnInit(): void {
  }

}
