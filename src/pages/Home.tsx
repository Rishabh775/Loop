import Header from "../components/Header";

export default function Home() {
  return (
    <div className="h-screen flex-1 overflow-y-auto py-2 ">
      <div className="bg-gradient-to-b from-neutral-800 to-neutral-950 rounded-lg h-full w-full overflow-hidden overflow-y-auto">
        <Header>Header</Header>
      </div>
    </div>
  );
}
