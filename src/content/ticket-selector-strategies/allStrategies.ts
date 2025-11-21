import { ticketPageSelectorStrategy } from "./strategies/ticketPageSelectorStrategy";
import type { ITicketSelectorStrategy } from "./ITicketSelectorStrategy";

export const allSelectorStrategies: ITicketSelectorStrategy[] = [
  ticketPageSelectorStrategy,
];
