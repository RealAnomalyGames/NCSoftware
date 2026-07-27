export abstract class Scene {

    public readonly name: string;

    constructor(name: string) {

        this.name = name;

    }

    public initialize(): void {

    }

    public update(): void {

    }

    public render(): void {

    }

    public dispose(): void {

    }

}