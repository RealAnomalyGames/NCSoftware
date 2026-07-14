import { EngineConfig } from "../config/EngineConfig.js";
import { Logger } from "../utilities/Logger.js";
import { Renderer } from "../rendering/Renderer.js";
import { EditorUI } from "../../editor/ui/EditorUI.js";

export class Engine {

    public readonly name = EngineConfig.engineName;

    public readonly version = EngineConfig.version;

    public readonly build = EngineConfig.build;

    private running = false;

    private editor = new EditorUI();

    private renderer = new Renderer();

    constructor() {

        Logger.info(this.name);

        Logger.info(`Version ${this.version} Build ${this.build}`);

        Logger.info(`Project: ${EngineConfig.projectName}`);

        Logger.info(`Author: ${EngineConfig.author}`);

    }

    public async initialize(): Promise<void> {

        const splash = this.showSplash();

        return new Promise((resolve) => {

            setTimeout(() => {

                this.hideSplash(splash);

                const app = document.getElementById("app");

                if (!app) {

                    Logger.error("App container not found.");

                    throw new Error("App container not found.");

                }

                this.editor.build(app);

                const sceneView = document.getElementById("scene-view");

                if (!sceneView) {

                    Logger.error("Scene View not found.");

                    throw new Error("Scene View not found.");

                }

                this.renderer.initialize(sceneView);

                Logger.info("Engine initialized.");

                resolve();

            }, 2000);

        });

    }

    public start(): void {

        if (this.running) {

            return;

        }

        this.running = true;

        Logger.info("Engine started.");

        requestAnimationFrame(this.loop);

    }

    public getConfig(): typeof EngineConfig {

        return EngineConfig;

    }

    public stop(): void {

        this.running = false;

        Logger.info("Engine stopped.");

    }

    private showSplash(): HTMLDivElement {

        const splash = document.createElement("div");

        splash.id = "splash-screen";

        splash.innerHTML = `
            <h1>${this.name}</h1>
            <p>Version ${this.version} Build ${this.build}</p>
        `;

        document.body.appendChild(splash);

        return splash;

    }

    private hideSplash(splash: HTMLDivElement): void {

        splash.remove();

    }

    private loop = (timestamp: number): void => {

        if (!this.running) {

            return;

        }

        this.update(timestamp);

        this.renderer.render();

        requestAnimationFrame(this.loop);

    };

    private update(_timestamp: number): void {

    }

}