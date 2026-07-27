import { Scene } from "./Scene.js";
import { Logger } from "../utilities/Logger.js";

export class SceneManager {

    private currentScene: Scene | null = null;

    public loadScene(scene: Scene): void {

        if (this.currentScene) {

            this.currentScene.dispose();

        }

        this.currentScene = scene;

        this.currentScene.initialize();

        Logger.info(`Current Scene: ${scene.name}`);

    }

    public update(): void {

        this.currentScene?.update();

    }

    public render(): void {

        this.currentScene?.render();

    }

    public getCurrentScene(): Scene | null {

        return this.currentScene;

    }

}