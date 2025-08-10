export default function PrimaryBtn({ content }) {
  return (
    <button className="cursor-pointer bg-background text-primary font-bold border-primary border-2 rounded-xl p-3">
      {content}
    </button>
  );
}
