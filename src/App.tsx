import { useState } from "react";
import Alert from "./components/Alert";
import { Button } from "./components/Button";

function App() {
  useState(false);
  const [alertVisible, setAlertVisibility] = useState(false);
  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>Warning</Alert>
      )}
      <Button onClick={() => setAlertVisibility(true)}>Click Me</Button>
    </div>
  );
}

export default App;
