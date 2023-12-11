import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('UIBase')
export class UIBase extends Component {
   @property({
      displayName: '初始显示状态'
   })
   isShowInit: boolean = false;
   protected onLoad(): void {
      this.node.active = this.isShowInit;
   }
   start() {

   }

   update(deltaTime: number) {

   }
}


