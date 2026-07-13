export class Engine {
    public readonly name: string = "NC Software Engine";
    public readonly version: string = "0.01";
    public readonly build: string = "001";

    constructor() {
        console.log(`${this.name}`);
        console.log(`Version ${this.version} Build ${this.build}`);
    }

    public initialize(): void {
        console.log("Engine initialized.");

        const app = document.getElementById("app");

        if (app) {
            app.textContent = `${this.name} Ready`;
        }
    }
}