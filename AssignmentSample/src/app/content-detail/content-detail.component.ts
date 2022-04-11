import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Content } from '../../app/helper-files/content-interface';
import { DigimonService } from '../services/digimon.service';

@Component({
  selector: 'app-content-detail',
  templateUrl: './content-detail.component.html',
  styleUrls: ['./content-detail.component.scss']
})
export class ContentDetailComponent implements OnInit {

id?: number;
individualContent?: Content;

  constructor(private route: ActivatedRoute, private digimonService: DigimonService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      if (!params.get('id')){
        console.error("Where is the Id");
      }
      this.id = Number(params.get('id') ?? "0");
      this.digimonService.getContentItem(this.id).subscribe((singleDigimon) => {
        this.individualContent = singleDigimon;
      })
    })
  }

}
