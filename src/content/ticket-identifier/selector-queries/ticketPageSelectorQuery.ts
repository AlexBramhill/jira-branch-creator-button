import type { TicketSelectorQuery as TicketSelectorQuery } from "./ticketSelectorQuery";

/**
 * Rule for ticket page ie https://example.atlassian.net/browse/PD-1
 */
export const ticketPageSelectorQuery: TicketSelectorQuery = {
  containerSelectorQuery:
    '[data-testid="issue.views.issue-details.issue-layout.compact-layout"]',
  prefixSelectorQuery:
    '[data-testid="issue.views.issue-base.foundation.breadcrumbs.breadcrumb-current-issue-container.issue-key"]',
  titleSelectorQuery:
    '[data-testid="issue.views.issue-base.foundation.summary.heading"]',
};
