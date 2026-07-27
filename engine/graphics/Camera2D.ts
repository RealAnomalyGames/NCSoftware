export class Camera2D {

    private x = 0;

    private y = 0;

    private zoom = 1;

    public setPosition(x: number, y: number): void {

        this.x = x;

        this.y = y;

    }

    public move(dx: number, dy: number): void {

        this.x += dx;

        this.y += dy;

    }

    public setZoom(zoom: number): void {

        if (zoom <= 0) {

            return;

        }

        this.zoom = zoom;

    }

    public getX(): number {

        return this.x;

    }

    public getY(): number {

        return this.y;

    }

    public getZoom(): number {

        return this.zoom;

    }

}