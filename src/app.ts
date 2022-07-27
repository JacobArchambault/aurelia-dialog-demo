import { autoinject } from "aurelia-framework";
import { DialogService } from "aurelia-dialog";
import { Dialog } from "resources/elements/dialog";

@autoinject
export class App {

  constructor(private dialogService: DialogService) { }
  attached(): void {
  }

  openDialog(): void {
    this.dialogService.open({
      viewModel: Dialog,
      model: {
        message: 'Message text...',
        title: 'Title text...', action: this.action
      }
    })
      .then(response => {
        console.log(response);
      })
      ;
  }

  action(): void {
    alert('OK button pressed');
  }
}
