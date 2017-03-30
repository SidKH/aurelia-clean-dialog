import {inject} from 'aurelia-framework';
import {ConfirmationDialog} from './confirmation-dialog/confirmation-dialog';
import {DialogService} from 'aurelia-dialog';


@inject(DialogService)
export class App {
  constructor(dialogService) {
    this.dialogService = dialogService;
  }
  openDialog() {
    this.displayConfirmationDialog(this.dialogService);
  }
  displayConfirmationDialog(dialogService){
    let dialogContent = {
      title: 'dataElementUnsavedChanges',
      icon: 'labfolder-icon-warning',
      message: 'dataElementCancelDialogMessage',
      buttons: [
        {
          name: 'quit-btn',
          text: 'dataElementCancelDialogQuit',
          action: 'quit'
        },
        {
          name: 'save-btn',
          text: 'dataElementCancelDialogSave',
          action: 'save'
        }
      ]
    }

    return dialogService.open({viewModel:ConfirmationDialog, model: dialogContent});
  }
}