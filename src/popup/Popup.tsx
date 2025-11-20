import { createSignal } from "solid-js";

export default function Popup() {
  const [count, setCount] = createSignal(0);
  return (
    <div style="padding: 16px;">
      <h1>Hello from SolidJS!</h1>
      <button onClick={() => setCount(count() + 1)}>Count: {count()}</button>
    </div>
  );
}
