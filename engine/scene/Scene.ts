import { GameObject } from "../objects/GameObject.js";

export abstract class Scene {

    public readonly name: string;

    protected gameObjects: GameObject[] = [];

    constructor(name: string) {

        this.name = name;

    }

    public initialize(): void {

    }

    public update(): void {

        for (const gameObject of this.gameObjects) {

            gameObject.update();

        }

    }

    public render(): void {

        for (const gameObject of this.gameObjects) {

            gameObject.render();

        }

    }

    public dispose(): void {

    }

    public addGameObject(gameObject: GameObject): void {

        this.gameObjects.push(gameObject);

        gameObject.initialize();

    }

    public removeGameObject(gameObject: GameObject): void {

        this.gameObjects = this.gameObjects.filter(

            object => object !== gameObject

        );

    }

    public getGameObjects(): GameObject[] {

        return this.gameObjects;

    }

}