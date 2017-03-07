import { Injectable } from "@angular/core";
import { Dispatcher } from "../../core/Dispatcher";
import { HttpService } from "../../core/HttpService";
import { ChecklistActionType } from './checklist.action.type';

@Injectable()
export default class ChecklistAction {
  constructor(private dispatcher: Dispatcher, private httpService: HttpService) {
  }

  public init() {
    let observable = this.httpService.getFakeData('assets/checklist.json', {});
    observable.subscribe(
      (data) => this.dispatcher.dispatch(ChecklistActionType.INIT, data)
    );
    return observable;
  }

  public save() {
    let observable = this.httpService.getFakeData('assets/checklistSave.json', {});
    observable.subscribe(
      (data) => this.dispatcher.dispatch(ChecklistActionType.SAVE, data)
    );
    return observable;
  }
}