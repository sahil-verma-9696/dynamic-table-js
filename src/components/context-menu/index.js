export default function ContextMenu({ actions = [] } = {}) {
  let contextData = null;
  const contextMenu = document.createElement("div");
  contextMenu.id = "context-menu";

  Object.assign(contextMenu.style, {
    position: "fixed",
    display: "none",
    zIndex: "1000",
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    padding: "4px 0",
    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.2)",
    borderRadius: "4px",
    minWidth: "160px",
  });

  actions.forEach((action) => {
    const button = document.createElement("button");
    button.textContent = action.label;
    button.style.width = "100%";
    button.style.padding = "8px 12px";
    button.style.border = "none";
    button.style.background = "transparent";
    button.style.textAlign = "left";
    button.style.cursor = "pointer";
    button.style.fontSize = "14px";

    button.addEventListener("click", (e) => {
      e.stopPropagation(); // prevent click bubbling
      contextMenu.style.display = "none"; // auto-close
      action.onClick?.({ event: e, data: contextData });
    });

    button.addEventListener("mouseenter", () => {
      button.style.backgroundColor = "#f0f0f0";
    });
    button.addEventListener("mouseleave", () => {
      button.style.backgroundColor = "transparent";
    });

    contextMenu.appendChild(button);
  });

  // Hide on outside click
  document.addEventListener("click", () => {
    contextMenu.style.display = "none";
  });

  contextMenu.show = ({ x, y, data }) => {
    contextMenu.style.left = `${x}px`;
    contextMenu.style.top = `${y}px`;
    contextMenu.style.display = "block";
    contextData = data;
  };

  return contextMenu;
}
