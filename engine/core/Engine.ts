export class Engine {
    public readonly name: string = "NC Software Engine";
    public readonly version: string = "0.01";
    public readonly build: string = "001";

    private running: boolean = false;

    constructor() {
        console.log(this.name);
        console.log(`Version ${this.version} Build ${this.build}`);
    }

    public initialize(): void {
        const app = document.getElementById("app");

        if (app) {
            app.textContent = `${this.name} Ready`;
        }

        console.log("Engine initialized.");
    }

    public start(): void {
        if (this.running) {
            return;
        }

        this.running = true;

        console.log("Engine started.");

        requestAnimationFrame(this.loop);
    }

    private loop = (timestamp: number): void => {
        if (!this.running) {
            return;
        }

        this.update(timestamp);

        this.render();

        requestAnimationFrame(this.loop);
    };

    private update(timestamp: number): void {
        // Game logic will go here.
    }

    private render(): void {
        // Rendering will go here.
    }

    public stop(): void {
        this.running = false;

        console.log("Engine stopped.");
    }
}