import { useState } from "react";

const isValidURL = (query: string): boolean => {
  const URLpattern = new RegExp(
    "^(https?:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
      "(\\#[-a-z\\d_]*)?$",
    "i"
  ); // fragment locator

  return !!URLpattern.test(query);
};

const App: React.FC = () => {
  const [query, setQuery] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isValidURL(query)) {
      window.location.href = query;
      return;
    }

    const encodedQuery = encodeURIComponent(query);

    window.location.href = `https://google.com/search?q=${encodedQuery}`;
    return;
  };

  return (
    <main className="flex flex-col h-screen bg-zinc-900 items-center justify-center">
      <h1 className="text-slate-200 text-4xl font-light">frameless</h1>

      <form onSubmit={handleSubmit} className="pt-4 text-slate-100">
        <div className="flex flex-col gap-0.5">
          <label className="text-slate-300 font-light">
            enter a URL or search Google
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
