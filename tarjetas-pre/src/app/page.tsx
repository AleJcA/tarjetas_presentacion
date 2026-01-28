import Image from "next/image";
import Tarjetas from "./componets/Tarjetas";

export default function Home() {
  return (

    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Tarjetas />
    </main>

  );
}
