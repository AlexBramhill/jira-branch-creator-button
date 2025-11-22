import type { ITicketSelectorStrategy } from "../../ticket-selector-strategies/ITicketSelectorStrategy";
import type { IContainerProcessorStrategy } from "../IContainerProcessorStrategy";

export const injectCopyTextButtonStrategy: IContainerProcessorStrategy = {
  processContainer: ({
    container,
    ticketSelectorStrategy,
  }: {
    container: HTMLElement;
    ticketSelectorStrategy: ITicketSelectorStrategy;
  }) => {
    const text = getTextToCopy(ticketSelectorStrategy, container);
    console.log("Injecting button into container:", container);

    const buttonId = `copy-button-${text}`; // TODO hash the strategy and add here

    if (document.getElementById(buttonId)) {
      console.log("Button already exists, skipping injection");
      return;
    }

    const button = createButton(buttonId, text);

    const titleElement = ticketSelectorStrategy.selectTitleElement(container);

    if (titleElement) {
      titleElement.appendChild(button);
    }
  },
};

const createButton = (buttonId: string, ticketName: string) => {
  const button = document.createElement("button");
  button.id = buttonId;
  button.textContent = "Copy Branch Name";
  button.style.marginLeft = "8px";
  button.onclick = (event) => {
    event.stopPropagation();
    event.preventDefault();
    navigator.clipboard.writeText(ticketName);
  };
  return button;
};

// TODO make this customisable
const getTextToCopy = (
  ticketSelectorStrategy: ITicketSelectorStrategy,
  container: HTMLElement
): string => {
  const prefixElement = ticketSelectorStrategy.selectPrefixElement(container);
  const titleElement = ticketSelectorStrategy.selectTitleElement(container);
  const prefixText = prefixElement ? prefixElement.textContent?.trim() : "";
  const titleText = titleElement ? titleElement.textContent?.trim() : "";
  return `${prefixText}: ${titleText}`.replace(/\s+/g, "-");
};
