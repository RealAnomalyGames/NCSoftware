import { Scene } from "./Scene.js";
import { Logger } from "../utilities/Logger.js";
import { TestObject } from "../objects/TestObject.js";

export class EmptyScene extends Scene {

    constructor() {

        super("Empty Scene");

    }

    public override initialize(): void {

        Logger.info(`Scene "${this.name}" loaded.`);

        const object = new TestObject();

        object.transform.setPosition(100, 150);

        this.addGameObject(object);

    }

    public override dispose(): void {

        Logger.info(`Scene "${this.name}" unloaded.`);

    }

}