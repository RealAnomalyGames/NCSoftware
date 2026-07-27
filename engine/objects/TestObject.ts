import { GameObject } from "./GameObject.js";
import { Logger } from "../utilities/Logger.js";

export class TestObject extends GameObject {

    constructor() {

        super("Test Object");

    }

    public override initialize(): void {

        Logger.info(`${this.name} initialized.`);

    }

    public override update(): void {

    }

    public override render(): void {

    }

}