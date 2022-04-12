import createEl from "@codebundlesbyvik/element-operations";

export default function htmlDevLabel(position) {
    if (process.env.NODE_ENV !== "development") {
        return;
    }

    let el = document.querySelector("#html-dev-label");

    if (el) {
        console.warn("html-dev-label: Exiting - label already active.");

        return;
    }

    el = createEl("div", { id: "html-dev-label" });

    el.textContent = "Build: dev";

    const positionArray = position ? position.toLowerCase().split(" ") : "bottom right";
    const positionY = positionArray[0] === "top" ? "top: 0.25rem;" : "bottom: 0.25rem;";
    const positionX = positionArray[1] === "left" ? "left: 0.25rem;" : "right: 0.25rem;";

    const elCss = `
        position: fixed; ${positionY} ${positionX} z-index: 10000;
        padding: 1rem;
        text-transform: uppercase; font: 700 1.25rem system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif;
        background-color: white; border: 0.25rem solid red;
    `;
    el.style.cssText = elCss;

    document.body.insertBefore(el, document.body.firstElementChild);
}
