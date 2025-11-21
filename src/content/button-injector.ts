import type { ITicketSelectorStrategy } from "./ticket-selector-strategies/ITicketSelectorStrategy";

export const addButtonMutationObserverToContainer = ({
  container,
  ticketName,
  strategy,
}: {
  container: Element;

  ticketName: string;
  strategy: ITicketSelectorStrategy;
}) => {
  console.log("Adding MutationObserver to container:", container);
  const observer = new MutationObserver(() => {
    injectCopyToClipboardButtonInContainer({
      container: strategy.selectContainers()[0],
      ticketName,
      strategy,
    });
  });

  observer.observe(document, {
    childList: true,
    subtree: true,
  });
};

// TODO: Make the location for the button configurable
const injectCopyToClipboardButtonInContainer = ({
  container,
  ticketName,
  strategy,
}: {
  container: Element;
  ticketName: string;
  strategy: ITicketSelectorStrategy;
}) => {
  console.log("Injecting button into container:", container);

  const buttonId = `copy-button-${ticketName}`;

  // Check if button already exists
  if (document.getElementById(buttonId)) {
    console.log("Button already exists, skipping injection");
    return;
  }

  const button = document.createElement("button");
  button.id = buttonId;
  button.textContent = "Copy Branch Name";
  button.style.marginLeft = "8px";
  button.onclick = () => {
    navigator.clipboard.writeText(ticketName);
  };
  const titleElement = strategy.selectTitleElement(container);
  if (titleElement) {
    titleElement.appendChild(button);
  }
};
