import { _decorator, NodeEventType, Node } from 'cc';
import { UIBase } from './UIBase';
import { UIManager } from '../UIManager';
const { ccclass, property } = _decorator;
const { TOUCH_CANCEL, TOUCH_START, TOUCH_END } = NodeEventType;

@ccclass('StarMenu')
export class StarMenu extends UIBase {
   @property(Node) startButton: Node = undefined;
   @property(Node) levelSelectButton: Node = undefined;
   protected onLoad(): void {
      super.onLoad();
   }
   start() {

   }

   update(deltaTime: number) {

   }
   init(uiManager: UIManager) {

   }
}


