# Jira Branch Creator Button

A Chrome extension that adds a button to Jira issue pages to easily create and copy a git branch name formatted from the ticket details.

## Features

- **Configurable Jira URL**: Set your team's Jira domain in the extension popup.
- **Automatic Button Injection**: A "Copy Branch Name" button is automatically added to Jira issue pages.
- **Formatted Branch Names**: Generates branch names like `feature/TICKET-123-a-brief-ticket-summary`.
- **One-Click Copy**: Copies the generated branch name to your clipboard instantly.

## Development

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/AlexBramhill/jira-branch-creator-button.git
    cd jira-branch-creator-button
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Build the extension:**

    ```bash
    npm run build
    ```

    This will create a `dist` folder with the packed extension files.

4.  **Load the extension in Chrome:**
    - Navigate to `chrome://extensions`.
    - Enable **Developer mode** using the toggle in the top-right corner.
    - Click the **Load unpacked** button.
    - Select the `dist` directory from this project.

## Usage

1.  Click the extension's icon in your Chrome toolbar to open the popup.
2.  Enter the base hostname of your Jira instance (e.g., `your-company.atlassian.net`).
3.  Navigate to any Jira issue page.
4.  The "Copy Branch Name" button will appear near the issue title.
5.  Click the button to copy the formatted branch name to your clipboard.
