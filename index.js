import { createEl } from "@codebundlesbyvik/element-operations";

class DevLabel {
    init() {
        if (process.env.NODE_ENV !== "development") {
            return;
        }

        const labelEl = document.querySelector("#html-dev-label");

        if (labelEl) {
            throw new Error("html-dev-label: Exiting - instance has already been initialized!");
        }

        this.createLabel();
    }

    createLabel() {
        const elTag = "div";
        const elId = "html-dev-label";
        const elCss = `
            position: fixed; bottom: 0.25rem; right: 0.25rem; z-index: 10000;
            padding: 1rem;
            text-transform: uppercase; font: 700 1.25rem system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif;
            background-color: white; border: 0.25rem solid red;
        `;
        const elText = "Build: dev";

        const el = createEl(elTag, { id: elId });
        el.style.cssText = elCss;
        el.textContent = elText;

        document.body.insertBefore(el, document.body.firstElementChild);
    }
}

export default DevLabel;
