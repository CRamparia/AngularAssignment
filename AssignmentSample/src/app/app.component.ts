import { ApplicationRef, Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { first } from 'rxjs';
import { Content } from './helper-files/content-interface';
import { LogUpdateService } from './log-update.service';
import { DigimonService } from './services/digimon.service';
import { MessageService } from './services/message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'AssignmentSample';
  // individualDigimon?: Content;

  constructor(private messageService: MessageService, private logService: LogUpdateService,
    private appRef: ApplicationRef,
    private updates: SwUpdate
    ) {
  }

  ngOnInit(): void {
    this.logService.init();

    const appIsStable$ = this.appRef.isStable.pipe(
      first(isStable => isStable === true)
    );
    
  }
  // displayItem(id: string): void{
  //   if (!parseInt(id)) {
  //     this.messageService.add("Please enter a number value");
  //     return;
  //   }
  //   let idNumber = parseInt(id);
  //   this.digimonService.getContent().subscribe(digimonArray => {
  //     let digimonInArray = digimonArray.find(individualDigimon => individualDigimon.id === idNumber);
  //     if (!digimonInArray) {
  //       this.messageService.add("Please enter a number value for a valid id");
  //     }
  //     else {
  //       this.individualDigimon = digimonInArray;
  //     }
  //   });
  // }
}
