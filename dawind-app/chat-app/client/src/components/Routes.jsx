import { useContext } from "react";

import { UserContext } from "../context/UserContext";

import Form from "./Form";
import Chat from "./Chat";

export default function Routes() {
  const { username } = useContext(UserContext);

  if (username) return <Chat />;

  return <Form />;
}
