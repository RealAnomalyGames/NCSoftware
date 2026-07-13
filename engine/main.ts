import { Engine } from "./core/Engine.js";

const engine = new Engine();

(async () => {

    await engine.initialize();

    engine.start();

})();