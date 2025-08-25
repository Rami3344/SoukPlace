export default function PrimaryBtn({ content }) {
  return (
    <button className="cursor-pointer bg-background text-primary text-small font-bold border-primary border-2 rounded-xl p-3 w-[20%]">
      {content}
    </button>
  );
}
