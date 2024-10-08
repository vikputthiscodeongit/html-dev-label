import { createEl } from "@codebundlesbyvik/js-helpers";

interface Options {
    parentEl?: HTMLElement;
    position?: ["top" | "bottom", "left" | "right"];
    size?: "sm" | "md" | "lg";
    text?: string;
    fontFamily?: "monospace" | "sans-serif" | "inherit";
    backgroundColor?: string;
    borderColor?: string;
}

const DEFAULT_OPTIONS: Required<Options> = {
    parentEl: document.body,
    position: ["bottom", "right"],
    size: "md",
    text: "DEV BUILD",
    fontFamily: "monospace",
    backgroundColor: "#FFF",
    borderColor: "#F00",
};

const PADDINGS = {
    sm: "0.75rem",
    md: "1rem",
    lg: "1.3333rem",
};
const FONT_SIZES = {
    sm: "1rem",
    md: "1.25rem",
    lg: "1.5rem",
};
const FONT_FAMILIES = {
    monospace: 'SFMono-Regular,Consolas,"Liberation Mono",monospace',
    "sans-serif": "system-ui,sans-serif",
    inherit: "inherit",
};
const BORDER_WIDTHS = {
    sm: "0.1875rem",
    md: "0.25rem",
    lg: "0.3333rem",
};

function htmlDevLabel(positionOrOptions?: Options["position"] | Options) {
    if (process.env.NODE_ENV !== "development") return;

    console.log("Project is compiled in development mode.");

    const elInDom = document.body.contains(document.querySelector("#html-dev-label"));

    if (elInDom) {
        console.log("Element #htmlDevLabel already in the DOM.");

        return;
    }

    const userOptions = Array.isArray(positionOrOptions)
        ? { position: positionOrOptions }
        : positionOrOptions;
    const options = {
        ...DEFAULT_OPTIONS,
        ...userOptions,
    };

    const elCss = `position:fixed;${options.position[0]}:0.25rem;${
        options.position[1]
    }:0.25rem;z-index:1100;padding:${PADDINGS[options.size]};text-transform:uppercase;font:700 ${
        FONT_SIZES[options.size]
    }/1.2 ${FONT_FAMILIES[options.fontFamily]};background-color:${
        options.backgroundColor
    };border:${BORDER_WIDTHS[options.size]} solid ${options.borderColor};`;

    const el = createEl("div", {
        id: "html-dev-label",
        style: elCss,
        textContent: options.text,
    });

    options.parentEl.insertBefore(el, options.parentEl.firstElementChild);
}

export { htmlDevLabel as default };
