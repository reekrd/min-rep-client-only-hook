import ClientComponent from "./components/ClientComponent";

export default function Home() {

  const bit = ['one','two','three'];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Home</h1>
      <ClientComponent bit={ bit } />
    </main>
  );
}
