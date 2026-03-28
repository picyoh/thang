// remove mocked datas
const icons = [
  { title: "Fastfetch", name: "id-card-rounded" },
  { title: "Terminal", name: "terminal-rounded" },
];

function cloneIcons(node: HTMLElement) {
  const iconBar = document.getElementById("iconBar");
  const nodeId = node.id;
  icons.forEach((icon) => {
    if (icon.title === nodeId) {
      const iconNode = iconBar?.querySelector(`#${nodeId}`);
      const clonedNode = iconNode?.cloneNode(true) as HTMLElement;
      iconBar?.insertAdjacentElement("beforeend", clonedNode!);
    }
  });
}

// Observer
const observer = new MutationObserver((mutations) => {
  for (const mutation of mutations) {
    if (mutation.type === "childList" && mutation.addedNodes.length) {
      mutation.addedNodes.forEach((node) => {
        if (node.nodeType !== Node.ELEMENT_NODE) return;
        const newNode = node as HTMLElement;
        cloneIcons(newNode);
      });
    }
  }
});

// Export function
export function observeChanges(main: HTMLElement) {
  observer.observe(main!, { childList: true, subtree: true });
}
