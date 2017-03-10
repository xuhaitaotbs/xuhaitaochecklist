import { Injectable } from "@angular/core";
import { Dispatcher } from "../../../core/Dispatcher";
import { ChecklistWeekState } from "./checklistweek.state";
import { ChecklistWeekActionType } from "./checklistweek.action.type";

@Injectable()
export class ChecklistWeekStore {
  constructor(private dispatcher: Dispatcher, private state: ChecklistWeekState) {
      this.dispatcher.bindActions({type: ChecklistWeekActionType.INIT, instance: this, handler: this.init});

      this.dispatcher.bindActions({type: ChecklistWeekActionType.SAVE, instance: this, handler: this.save});
  }

  public init(data) {
      this.state.dataInfo = data.result;
  }

  public save(data) {
      if (data.status === 1) {
          this.state.message = "お見事です！すべて正解です！";
      } else if(data.status === 2) {
          this.state.message = "質問よく読んでから答えてください！";
      } else {
          this.state.message = "大丈夫ですか？トレーニング参加してください！";
      }
      this.state.status = data.status;
  }
}