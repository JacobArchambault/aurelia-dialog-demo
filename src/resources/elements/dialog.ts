import { DialogController } from 'aurelia-dialog';
import { autoinject } from 'aurelia-framework';

@autoinject
export class Dialog {
  private title: string;
  private message: string;
  private action: (args?: any) => {};

  constructor(private dialogController: DialogController) { }

  activate(model: any) {
    this.message = model.message;
    this.title = model.title;
    this.action = model.action;
  }

  ok(): void {
    this.action();
    this.dialogController.ok();
  }
}
