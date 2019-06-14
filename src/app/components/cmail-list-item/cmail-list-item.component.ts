import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cmail-list-item',
  templateUrl: './cmail-list-item.component.html',
  styles: []
})
export class CmailListItemComponent implements OnInit {

  @Input() email;
  
  constructor() { }

  ngOnInit() {
  }

}
