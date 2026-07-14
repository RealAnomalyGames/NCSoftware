import { Logger } from "../utilities/Logger.js";

export class Input {

    private keys = new Set<string>();

    private mouseButtons = new Set<number>();

    private mouseX = 0;

    private mouseY = 0;

    public initialize(): void {

        window.addEventListener("keydown", this.onKeyDown);

        window.addEventListener("keyup", this.onKeyUp);

        window.addEventListener("mousedown", this.onMouseDown);

        window.addEventListener("mouseup", this.onMouseUp);

        window.addEventListener("mousemove", this.onMouseMove);

        Logger.info("Input system initialized.");

    }

    private onKeyDown = (event: KeyboardEvent): void => {

        this.keys.add(event.code);

    };

    private onKeyUp = (event: KeyboardEvent): void => {

        this.keys.delete(event.code);

    };

    private onMouseDown = (event: MouseEvent): void => {

        this.mouseButtons.add(event.button);

    };

    private onMouseUp = (event: MouseEvent): void => {

        this.mouseButtons.delete(event.button);

    };

    private onMouseMove = (event: MouseEvent): void => {

        this.mouseX = event.clientX;

        this.mouseY = event.clientY;

    };

    public isKeyPressed(key: string): boolean {

        return this.keys.has(key);

    }

    public isMouseButtonPressed(button: number): boolean {

        return this.mouseButtons.has(button);

    }

    public getMouseX(): number {

        return this.mouseX;

    }

    public getMouseY(): number {

        return this.mouseY;

    }

}