export class Engine {
    public readonly name = "NC Software Engine";
    public readonly version = "0.01";
    public readonly build = "001";

    private running = false;

    private canvas!: HTMLCanvasElement;
    private context!: CanvasRenderingContext2D;

    constructor() {
        console.log(this.name);
        console.log(`Version ${this.version} Build ${this.build}`);
    }

    public initialize(): void {

        const app = document.getElementById("app");

        if (!app) {
            throw new Error("App container not found.");
        }

        this.canvas = document.createElement("canvas");

        const context = this.canvas.getContext("2d");

        if (!context) {
            throw new Error("Canvas 2D context not supported.");
        }

        this.context = context;

        app.appendChild(this.canvas);

        this.resizeCanvas();

        window.addEventListener("resize", () => {
            this.resizeCanvas();
        });

        console.log("Canvas created.");
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

    private update(_timestamp: number): void {

    }

    private render(): void {

        this.context.fillStyle = "#202124";

        this.context.fillRect(
            0,
            0,
            this.canvas.width,
            this.canvas.height
        );
    }

    private resizeCanvas(): void {

        this.canvas.width = window.innerWidth;

        this.canvas.height = window.innerHeight;
    }

    public stop(): void {

        this.running = false;

        console.log("Engine stopped.");
    }
}