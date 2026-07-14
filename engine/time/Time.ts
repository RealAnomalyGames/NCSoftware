export class Time {

    private deltaTime = 0;

    private elapsedTime = 0;

    private lastFrame = 0;

    private frameCount = 0;

    private fps = 0;

    private fpsTimer = 0;

    private fpsFrames = 0;

    public update(timestamp: number): void {

        if (this.lastFrame === 0) {

            this.lastFrame = timestamp;

        }

        this.deltaTime = (timestamp - this.lastFrame) / 1000;

        this.lastFrame = timestamp;

        this.elapsedTime += this.deltaTime;

        this.frameCount++;

        this.fpsTimer += this.deltaTime;

        this.fpsFrames++;

        if (this.fpsTimer >= 1) {

            this.fps = this.fpsFrames;

            this.fpsFrames = 0;

            this.fpsTimer = 0;

        }

    }

    public getDeltaTime(): number {

        return this.deltaTime;

    }

    public getElapsedTime(): number {

        return this.elapsedTime;

    }

    public getFrameCount(): number {

        return this.frameCount;

    }

    public getFPS(): number {

        return this.fps;

    }

}