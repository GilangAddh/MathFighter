import Phaser from "phaser";
export default class GameOverScene extends Phaser.Scene {
  constructor() {
    super("over-scene");
  }
  init(data) {
    this.replayButton = undefined;
    this.score = data.score;

    this.gameHalfWidth = this.scale.width * 0.5;
    this.gameHalfHeight = this.scale.height * 0.5;
  }
  preload() {
    this.load.image("background", "images/bg_layer1.png");
    this.load.image("gameover", "images/gameover.png");
    this.load.image("replay-button", "images/replay.png");
  }
  create() {
    this.add.image(this.gameHalfWidth, this.gameHalfHeight, "background");
    this.add.image(this.gameHalfWidth, 200, "gameover");
    this.add.text(this.gameHalfWidth - 150, 300, "Score: " + this.score, {
      fontSize: "32px",
      //@ts-ignore
      fill: "black",
    });

    this.replayButton = this.add
      .image(this.gameHalfWidth, 450, "replay-button")
      .setInteractive();

    this.replayButton.once(
      "pointerup",
      () => {
        this.scene.start("math-fighter-scene");
      },
      this
    );
  }
}
