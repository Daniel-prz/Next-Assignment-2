import Image from "next/image";
import UserForm from "./components/UserForm.jsx";
import Counter from "./components/Counter.js";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>React</h1>
      <UserForm />
      <Counter />
    </main>
  );
}
