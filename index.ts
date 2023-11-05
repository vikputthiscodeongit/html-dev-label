
type DevLabelPositions = "top" | "bottom" | "left" | "right";
interface DevLabelOptions {
    parentEl: HTMLElement,
    position: [DevLabelPositions, DevLabelPositions],
    fontFamily: "monospace" | "sans-serif",
    borderColor: string,
    borderWidth: "normal" | "wide"
}
import { createEl } from "@codebundlesbyvik/js-helpers";

const FONT_FAMILIES = {
    monospace: 'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
    "sans-serif": 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif'
};
const BORDER_WIDTHS = {
    normal: "0.25rem",
    wide: "0.375rem"
};

const DEFAULT_OPTIONS: DevLabelOptions = {
    parentEl: document.body,
    position: ["bottom", "right"],
    fontFamily: "monospace",
    borderColor: "#FF0000",
    borderWidth: "normal"
};

export default function htmlDevLabel(options: DevLabelOptions["position"] | DevLabelOptions = DEFAULT_OPTIONS) {
    if (process.env.NODE_ENV !== "development") {
        return;
    }

    const userOptions = Array.isArray(options) ? { position: options } : options;
    const mergedOptions = {
        ...DEFAULT_OPTIONS,
        ...userOptions
    };
    console.log(mergedOptions);

    const currentLabel = document.querySelector("#html-dev-label");

    if (currentLabel) {
        if (mergedOptions.parentEl.contains(currentLabel)) {
            console.warn("html-dev-label: Exiting - label is already present on page.");

            return;
        }

        mergedOptions.parentEl.insertBefore(currentLabel, mergedOptions.parentEl.firstChild);
    }

    const elCss = `
        position: fixed; ${mergedOptions.position[0]}: 0.25rem; ${mergedOptions.position[1]}: 0.25rem; z-index: 10000;
        padding: 1rem;
        text-transform: uppercase; font: 700 1.25rem/1.2 ${FONT_FAMILIES[mergedOptions.fontFamily]};
        background-color: white; border: ${BORDER_WIDTHS[mergedOptions.borderWidth]} solid ${mergedOptions.borderColor};
    `;

    const el = createEl("div", {
        id: "html-dev-label",
        style: elCss
    });

    el.textContent = "Build: dev";

    mergedOptions.parentEl.insertBefore(el, mergedOptions.parentEl.firstElementChild);
}
