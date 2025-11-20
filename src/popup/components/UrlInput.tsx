import { createSignal, onMount } from "solid-js";
import {
    getHostname,
  saveHostname,} from "../../shared/repository/chromeStorageSync";

export default function UrlInput() {
  const [inputValue, setInputValue] = createSignal("");

  onMount(async () => {
    const savedValue = await getHostname();
    console.log("Loaded from storage:", savedValue);
    if (savedValue) {
      setInputValue(savedValue);
    }
  });

  const handleInputChange = async (e: Event) => {
    const value = (e.target as HTMLInputElement).value;
    setInputValue(value);
    await saveHostname(value);
    console.log("Saved to storage:", value);
  };

  return (
    <div>
      <label for="url-input">URL:</label>
      <div style="display: flex; gap: 4px;">
        <span>https://</span>
        <input
          id="url-input"
          type="text"
          value={inputValue()}
          onInput={handleInputChange}
          placeholder="example.atlassian.net"
          style="flex: 1"
        />
        <span>/</span>
      </div>
    </div>
  );
}
