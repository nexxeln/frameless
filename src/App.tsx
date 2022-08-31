import { useState } from "react";

const App: React.FC = () => {
  const [query, setQuery] = useState("");

  return (
    <main className="flex flex-col h-screen bg-zinc-900 items-center justify-center">
      <h1 className="text-slate-200 text-4xl font-light">frameless</h1>

      <form className="pt-4 text-slate-100">
        <div className="flex flex-col gap-0.5">
          <label className="text-slate-300 font-light">
            enter a URL or search DuckDuckGo
          </label>
          <input
            onChange={(event) => setQuery(event.target.value)}
            value={query}
            type="text"
            placeholder=""
            className="px-4 py-2 rounded-md bg-zinc-800 focus:outline-none  border border-zinc-700 focus:border-zinc-500"
          />
        </div>
      </form>
    </main>
  );
};

export default App;
