import { Component, EventEmitter, Output } from "@angular/core";
import { TitleMode } from "src/app/@enums/title-mode.enum";
import { TodoStatusEnum } from "src/app/@enums/todo-status.enum";
import { TodoService } from "src/app/@services/todo.service";
import { TodoTaskType } from "src/app/@types/todo-task.type";
import { TodoPriorityEnum } from "src/app/@enums/todo-priority.enum";


@Component({
  selector    : "app-content",
  templateUrl : './content.component.html',
  styleUrls   : ['./content.component.scss']
})
export class ContentComponent {

  public titleMode: TitleMode = TitleMode.VIEW;

  @Output()
  private outputSelectedTask = new EventEmitter();

  public constructor(private todoService: TodoService)
  { }

  public getSelectedList() {
    return this.todoService.getSelectedList();
  }

  public getSelectedTaskCollection(): TodoTaskType[] {
    return this.todoService.getSelectedListTask();
  }

  public getDoneTaskCollection(): TodoTaskType[] {

    return this.todoService.getSelectedListTask().filter(todoItem => {
      return todoItem.status == TodoStatusEnum.DONE;
    });
  }

  public onChangeTitleModeToEdit() {
    this.titleMode = TitleMode.EDIT;
  }

  public onSaveTitle($value: string) {

    this.todoService.updateListTitle($value);
    this.titleMode = TitleMode.VIEW;
  }

  public onSaveTask($event: any) {

    if($event.code != "Enter") return;

    const taskContent    = $event.target.value;
    $event.target.value  = "";
    this.todoService.createNewTask(taskContent);
  }

  public onRemoveTask($index: number) {
    this.todoService.removeTaskByIndex($index);
  }

  public onCompleateTask($taskItem: TodoTaskType) {
    // this.todoService.compleateTask($taskItem);
    this.todoService.changeStatus($taskItem, TodoStatusEnum.DONE);
  }

  public onReadyTask($taskItem: TodoTaskType) {
    this.todoService.changeStatus($taskItem, TodoStatusEnum.READY);
  }

  public onSelectTask($index: number) {

    this.todoService.selectTaskByIndex($index);
    this.outputSelectedTask.emit();
  }


  public onChangeState($taskItem: TodoTaskType) {
    this.todoService.changePriority($taskItem, TodoPriorityEnum.IMPORTANT);
  }

  public isInTitleViewMode(): boolean {
    return this.titleMode == TitleMode.VIEW;
  }

  public isInTitleEditMode(): boolean {
    return this.titleMode == TitleMode.EDIT;
  }

  public isProcessable($taskItem: TodoTaskType): boolean {
    return $taskItem.status == TodoStatusEnum.READY;
  }

}
