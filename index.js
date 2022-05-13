import createEl from "@codebundlesbyvik/element-operations";

export default function htmlDevLabel(position) {
    if (process.env.NODE_ENV !== "development") {
        return;
    }

    let el = document.querySelector("#html-dev-label");

    if (el) {
        console.warn("html-dev-label: Exiting - label is already present on page.");

        return;
    }

    const positionArray = position ? position.toLowerCase().split(" ") : "bottom right";
    positionArray[0] ||= "top";
    positionArray[1] ||= "left";

    const elCss = `
        position: fixed; ${positionArray[0]}: 0.25rem; ${positionArray[1]}: 0.25rem; z-index: 10000;
        padding: 1rem;
        text-transform: uppercase; font: 700 1.25rem/1.2 system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif;
        background-color: white; border: 0.25rem solid red;
    `;

    el = createEl("div", {
        id: "html-dev-label",
        style: elCss
    });

    el.textContent = "Build: dev";

    document.body.insertBefore(el, document.body.firstElementChild);
}
