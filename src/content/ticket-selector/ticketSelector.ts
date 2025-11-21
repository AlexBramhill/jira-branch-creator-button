import { addButtonMutationObserverToContainer } from "../button-injector";
import type { ITicketSelectorStrategy } from "../ticket-selector-strategies/ITicketSelectorStrategy";

export const processPage = (selectorStrategies: ITicketSelectorStrategy[]) => {
  selectorStrategies.forEach((strategy) => {
    console.log("Processing strategy:", strategy);
    const containers = strategy.selectContainers();
    console.log(`Found ${containers.length} containers for strategy`, strategy);
    containers.forEach((container) => {
      var ticketPrefixElement = strategy.selectPrefixElement(container);
      if (!ticketPrefixElement) {
        console.log("Could not find prefix element for container", container);
        return;
      }
      console.log("Found ticket prefix element:", ticketPrefixElement);
      var ticketTitleElement = strategy.selectTitleElement(container);
      if (!ticketTitleElement) {
        console.log("Could not find title element for container", container);
        return;
      }
      console.log("Found ticket title element:", ticketTitleElement);
      addButtonMutationObserverToContainer({
        container,
        ticketName: "Test",
        strategy,
      });
    });
  });
};
