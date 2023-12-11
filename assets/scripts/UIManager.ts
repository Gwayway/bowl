import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;
import { StaticInstance } from './StaticInstance';

@ccclass('UIManager')
export class UIManager extends Component {
   protected onLoad(): void {
      StaticInstance.setUIManager(this);
   }
   start() {

   }

   update(deltaTime: number) {

   }
}


