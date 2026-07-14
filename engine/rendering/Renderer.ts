import { Logger } from "../utilities/Logger.js";

export class Renderer {

    private canvas!: HTMLCanvasElement;

    private context!: CanvasRenderingContext2D;

    private parent!: HTMLElement;

    private backgroundColor = "#202124";

    public initialize(parent: HTMLElement): void {

        this.parent = parent;

        this.createCanvas();

        this.resize();

        window.addEventListener("resize", () => {

            this.resize();

        });

        Logger.info("Renderer initialized.");

    }

    private createCanvas(): void {

        this.canvas = document.createElement("canvas");

        this.canvas.id = "engine-canvas";

        const context = this.canvas.getContext("2d");

        if (!context) {

            Logger.error("Canvas 2D context not supported.");

            throw new Error("Canvas 2D context not supported.");

        }

        this.context = context;

        this.parent.appendChild(this.canvas);

    }

    public resize(): void {

        this.canvas.width = this.parent.clientWidth;

        this.canvas.height = this.parent.clientHeight;

    }

    public clear(): void {

        this.context.fillStyle = this.backgroundColor;

        this.context.fillRect(

            0,
            0,
            this.canvas.width,
            this.canvas.height

        );

    }

    public render(): void {

        this.clear();

    }

    public setBackgroundColor(color: string): void {

        this.backgroundColor = color;

    }

    public getBackgroundColor(): string {

        return this.backgroundColor;

    }

    public getWidth(): number {

        return this.canvas.width;

    }

    public getHeight(): number {

        return this.canvas.height;

    }

    public getCanvas(): HTMLCanvasElement {

        return this.canvas;

    }

    public getContext(): CanvasRenderingContext2D {

        return this.context;

    }

}