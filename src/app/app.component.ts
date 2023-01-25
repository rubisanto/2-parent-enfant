import { Component, OnInit } from '@angular/core';
import { DataService } from './services/services.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '2-parent-enfant';
  images: any;

  // récupérer les données du service
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.getImages();
  }

  getImages() {
    // récupérer les images
    this.dataService.getImages().subscribe((data) => {
      console.log(data);
      console.log(data.results, 'data results')
      this.images = data.results;
    });
  }
}
