export interface ITicketSelectorStrategy {
  selectContainers: () => NodeListOf<Element>;
  selectPrefixElement: (container: Element) => Element | null;
  selectTitleElement: (container: Element) => Element | null;
}
