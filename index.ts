import { createEl } from "@codebundlesbyvik/js-helpers";

type PositionY = "top" | "bottom";
type PositionX = "left" | "right";

interface DefaultOptions {
    parentEl: HTMLElement;
    position: [PositionY, PositionX];
    size: "sm" | "md" | "lg";
    text: string;
    fontFamily: "monospace" | "sans-serif" | "inherit";
    backgroundColor: string;
    borderColor: string;
}
interface Options extends Partial<DefaultOptions> {}

const DEFAULT_OPTS: DefaultOptions = {
    parentEl: document.body,
    position: ["bottom", "right"],
    size: "md",
    text: "Build: dev",
    fontFamily: "monospace",
    backgroundColor: "#FFFFFF",
    borderColor: "#FF0000",
};

const PADDINGS = {
    sm: "0.75rem",
    md: "1rem",
    lg: "1.333333rem",
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
    lg: "0.333333rem",
};

function htmlDevLabel(options: string | [PositionY, PositionX] | Options = DEFAULT_OPTS) {
    if (process.env.NODE_ENV !== "development") return;

    console.log("Project is compiled in development mode.");

    const isElInDom = document.body.contains(document.querySelector("#html-dev-label"));

    if (isElInDom) {
        console.log("Returning - Element with htmlDevLabel ID already in the DOM.");

        return;
    }

    if (typeof options === "string") {
        console.warn(
            "Returning - 'position' of type String is deprecated. Convert it to an Array.",
        );

        return;
    }

    const userOpts = Array.isArray(options) ? { position: options } : options;
    const mergedOpts = {
        ...DEFAULT_OPTS,
        ...userOpts,
    };

    const elCss = `position:fixed;${mergedOpts.position[0]}:0.25rem;${
        mergedOpts.position[1]
    }:0.25rem;z-index:1100;padding:${PADDINGS[mergedOpts.size]};text-transform:uppercase;font:700 ${
        FONT_SIZES[mergedOpts.size]
    }/1.2 ${FONT_FAMILIES[mergedOpts.fontFamily]};background-color:${
        mergedOpts.backgroundColor
    };border:${BORDER_WIDTHS[mergedOpts.size]} solid ${mergedOpts.borderColor};`;

    const el = createEl("div", {
        id: "html-dev-label",
        style: elCss,
    });

    el.textContent = mergedOpts.text;

    mergedOpts.parentEl.insertBefore(el, mergedOpts.parentEl.firstElementChild);
}

export { htmlDevLabel as default };
