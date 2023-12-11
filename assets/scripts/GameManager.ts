import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;
import { StaticInstance } from './StaticInstance';
@ccclass('GameManager')
export class GameManager extends Component {
   protected onLoad(): void {
      StaticInstance.setGameManager(this);
   }
   start() {

   }

   update(deltaTime: number) {

   }
}


