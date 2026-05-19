import { Directive, ViewContainerRef, inject, input, effect } from '@angular/core';
import { Loading } from './loading';


@Directive({
  selector: '[appLoading]',
  standalone: true
})
export class LoadingDirective {
  // 這個就是動態插座，專門用來在被綁定的標籤內部塞元件
  private viewContainer = inject(ViewContainerRef);
  
  // 接收 Signal
  public appLoading = input.required<boolean>();

  constructor() {
    effect(() => {
      // 只要狀態一變，插座就先清空
      this.viewContainer.clear();

      if (this.appLoading()) {
        // 如果是載入中，直接把 LoadingComponent 实例化並塞進去
        this.viewContainer.createComponent(Loading);
      }
    });
  }
}