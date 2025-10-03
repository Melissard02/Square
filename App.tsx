import { useState } from "react";
import HomeScreen from "./components/HomeScreen";
import ChatScreen from "./components/ChatScreen";

export default function App() {
  const [screen, setScreen] = useState<"home" | "chat">("home");

  if (screen === "home") {
    return <HomeScreen onStart={() => setScreen("chat")} />;
  }

  if (screen === "chat") {
    return <ChatScreen onFinish={() => setScreen("home")} />;
  }

  return null;
}
