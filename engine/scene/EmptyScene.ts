import { Scene } from "./Scene.js";
import { Logger } from "../utilities/Logger.js";

export class EmptyScene extends Scene {

    constructor() {

        super("Empty Scene");

    }

    public override initialize(): void {

        Logger.info(`Scene "${this.name}" loaded.`);

    }

    public override dispose(): void {

        Logger.info(`Scene "${this.name}" unloaded.`);

    }

}