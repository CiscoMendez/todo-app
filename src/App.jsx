import Dashboard from './components/dashboard/dashboard';

export default function App() {
  return (
    <main className="flex flex-col items-center">
      <header className="p-8 w-full">
        <h1 className="text-4xl text-center font-bold ">#todo</h1>
      </header>
      <div className="flex flex-col w-full max-w-2xl ">
        <Dashboard />
      </div>
    </main>
  );
}
