import {inject} from 'aurelia-framework';
import {DialogController} from 'aurelia-dialog';

@inject(DialogController)

export class ConfirmationDialog {
  
  constructor(controller) {
    this.controller = controller;
  }
  
  activate(content) {
    this.content = content;
  }

}