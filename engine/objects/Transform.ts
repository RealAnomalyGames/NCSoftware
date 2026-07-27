export class Transform {

    private x = 0;

    private y = 0;

    private rotation = 0;

    private scaleX = 1;

    private scaleY = 1;

    public setPosition(x: number, y: number): void {

        this.x = x;

        this.y = y;

    }

    public translate(dx: number, dy: number): void {

        this.x += dx;

        this.y += dy;

    }

    public setRotation(rotation: number): void {

        this.rotation = rotation;

    }

    public rotate(amount: number): void {

        this.rotation += amount;

    }

    public setScale(x: number, y: number): void {

        this.scaleX = x;

        this.scaleY = y;

    }

    public getX(): number {

        return this.x;

    }

    public getY(): number {

        return this.y;

    }

    public getRotation(): number {

        return this.rotation;

    }

    public getScaleX(): number {

        return this.scaleX;

    }

    public getScaleY(): number {

        return this.scaleY;

    }

}