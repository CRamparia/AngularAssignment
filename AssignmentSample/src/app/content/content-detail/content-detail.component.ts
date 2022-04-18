import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Content } from '../../helper-files/content-interface';
import { DigimonService } from '../../services/digimon.service';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-content-detail',
  templateUrl: './content-detail.component.html',
  styleUrls: ['./content-detail.component.scss']
})
export class ContentDetailComponent implements OnInit {
  content?: Content;
  id?: number;

  constructor(private digimonService: DigimonService, private route: ActivatedRoute, private messageService: MessageService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = +(params.get('id') ?? -1);

      if (typeof this.id !== 'undefined' && this.id !== -1) {
        this.digimonService.getContentItem(this.id).subscribe(
          digimonAtIndex => {
            this.content = digimonAtIndex;
            this.messageService.add(`Individual item retrieved at id: ${this.id} and title is ${this.content.title}`);
          }
        );
      }
      else {
        // handle when it's not set or the id passed in wasn't a number
      }
    });

  }
}
