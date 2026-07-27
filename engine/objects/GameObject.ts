import { Transform } from "./Transform.js";

export class GameObject {

    public readonly name: string;

    public readonly transform = new Transform();

    constructor(name: string) {

        this.name = name;

    }

    public initialize(): void {

    }

    public update(): void {

    }

    public render(): void {

    }

}