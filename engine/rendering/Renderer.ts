import { Logger } from "../utilities/Logger.js";

export class Renderer {

    private canvas!: HTMLCanvasElement;

    private context!: CanvasRenderingContext2D;

    public initialize(parent: HTMLElement): void {

        this.canvas = document.createElement("canvas");

        const context = this.canvas.getContext("2d");

        if (!context) {

            Logger.error("Canvas 2D context not supported.");

            throw new Error("Canvas 2D context not supported.");

        }

        this.context = context;

        parent.appendChild(this.canvas);

        this.resize(parent);

        window.addEventListener("resize", () => {

            this.resize(parent);

        });

        Logger.info("Renderer initialized.");

    }

    public render(): void {

        this.context.fillStyle = "#202124";

        this.context.fillRect(

            0,
            0,
            this.canvas.width,
            this.canvas.height

        );

    }

    public resize(parent: HTMLElement): void {

        this.canvas.width = parent.clientWidth;

        this.canvas.height = parent.clientHeight;

    }

    public getCanvas(): HTMLCanvasElement {

        return this.canvas;

    }

    public getContext(): CanvasRenderingContext2D {

        return this.context;

    }

}