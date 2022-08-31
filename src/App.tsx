import { useState } from "react";

const App: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <main className="flex flex-col h-screen bg-zinc-900 items-center justify-center">
      <h1 className="text-slate-200 text-4xl font-light">frameless</h1>
      <p className="text-slate-400 font-light">
        the browser for all your screenshot needs
      </p>
    </main>
  );
};

export default App;
