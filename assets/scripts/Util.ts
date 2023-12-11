import { tween } from "cc";

export class Util {
   static clickDownTween(node: Node | undefined) {
      if (!node) return;
      tween(node).to(0.1, { scale: 1 }).start();
   }
}


