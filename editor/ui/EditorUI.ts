export class EditorUI {

    public build(root: HTMLElement): void {

        root.innerHTML = `
            <div id="editor">

                <header id="toolbar">

                    <span>NC Software Engine</span>

                    <div id="toolbar-info">

                        <span id="fps-counter">
                            FPS: --
                        </span>

                        <span id="engine-version">
                            Version 0.01 (Build 002)
                        </span>

                    </div>

                </header>

                <div id="workspace">

                    <aside id="hierarchy">
                        Hierarchy
                    </aside>

                    <main id="scene-view">
                        Scene View
                    </main>

                    <aside id="inspector">
                        Inspector
                    </aside>

                </div>

                <footer id="console-panel">
                    Console
                </footer>

            </div>
        `;

    }

}