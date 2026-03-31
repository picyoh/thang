//TODO: remove mocked datas
const icons = [
  { title: "Fastfetch", name: "id-card-rounded" },
  { title: "Terminal", name: "terminal-rounded" },
];
function cloneIcons(node: HTMLElement) {
  // Get Icon bar
  const iconBar = document.getElementById("iconBar");
  // Get node id
  const nodeId = node.id;
  // Get node type
  const nodeType = nodeId.split("-")[0];
  icons.forEach((icon) => {
    if (icon.title === nodeType) {
      // Get first icon of this kind 
      const iconNode = iconBar?.querySelector(`#${nodeType}-0`);
      // Clone node
      const clonedNode = iconNode?.cloneNode(true) as HTMLElement;
      // Set id
      clonedNode.id = nodeId;
      // Insert
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
