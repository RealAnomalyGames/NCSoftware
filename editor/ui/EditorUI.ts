export class EditorUI {

    public build(root: HTMLElement): void {

        root.innerHTML = `
            <div id="editor">

                <header id="toolbar">
                    Toolbar
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