export function NoteCard() {
  return (
    <button className="rounded-md text-left bg-slate-800 p-5 space-y-3 overflow-hidden relative outline-none focus-visible:ring-2 focus-visible:ring-lime-400 hover:ring-2 hover:ring-slate-600">
      <span className="text-sm font-medium text-slate-200">Há 4 dias </span>
      <p className="text-sm leading-6 text-slate-300">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat a ullam
        labore, cupiditate natus deserunt inventore porro dolores eveniet libero
        sit nobis? Neque eligendi laboriosam doloribus voluptatum iusto iste et.
      </p>
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none"></div>
    </button>
  );
}
