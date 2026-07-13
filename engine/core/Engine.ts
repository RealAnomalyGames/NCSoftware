import { Logger } from "../utilities/Logger.js";

export class Engine {
    public readonly name = "NC Software Engine";
    public readonly version = "0.01";
    public readonly build = "001";

    private running = false;

    private canvas!: HTMLCanvasElement;
    private context!: CanvasRenderingContext2D;

    constructor() {
        Logger.info(this.name);
        Logger.info(`Version ${this.version} Build ${this.build}`);
    }

    public initialize(): void {

        const app = document.getElementById("app");

        if (!app) {
            Logger.error("App container not found.");

            throw new Error("App container not found.");
        }

        this.canvas = document.createElement("canvas");

        const context = this.canvas.getContext("2d");

        if (!context) {
            Logger.error("Canvas 2D context not supported.");

            throw new Error("Canvas 2D context not supported.");
        }

        this.context = context;

        app.appendChild(this.canvas);

        this.resizeCanvas();

        window.addEventListener("resize", () => {
            this.resizeCanvas();
        });

        Logger.info("Canvas created.");
        Logger.info("Engine initialized.");
    }

    public start(): void {

        if (this.running) {
            return;
        }

        this.running = true;

        Logger.info("Engine started.");

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

        Logger.info("Engine stopped.");
    }
}