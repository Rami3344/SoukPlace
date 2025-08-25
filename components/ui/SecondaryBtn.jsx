export default function SecondaryBtn({ content }) {
  return (
    <button className="bg-secBackground border-2 rounded-xl p-2 w-40 cursor-pointer">
      {content}
    </button>
  );
}
