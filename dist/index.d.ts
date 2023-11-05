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
interface Options extends Partial<DefaultOptions> {
}
declare function htmlDevLabel(options?: string | [PositionY, PositionX] | Options): void;
export { htmlDevLabel as default };
