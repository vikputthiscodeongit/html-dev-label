interface Options {
    parentEl?: HTMLElement;
    position?: ["top" | "bottom", "left" | "right"];
    size?: "sm" | "md" | "lg";
    text?: string;
    fontFamily?: "monospace" | "sans-serif" | "inherit";
    backgroundColor?: string;
    borderColor?: string;
}
declare function htmlDevLabel(positionOrOptions?: Options["position"] | Options): void;
export { htmlDevLabel as default };
