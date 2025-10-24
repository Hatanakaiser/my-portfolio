// src/components/ui/BookCard.tsx
export type Book = {
  title: string;
  desc: string;
  image: string;
  link?: string;
  tag?: string;
};

export default function BookCard({ title, desc, image, link, tag }: Book) {
  return (
    <div className="border rounded-2xl overflow-hidden shadow-sm bg-white hover:shadow-md transition">
      <div className="aspect-[3/4] w-full overflow-hidden">
        <img src={image} alt={title} className="object-cover w-full h-full" />
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-semibold text-lg">{title}</h3>
          {tag && (
            <span className="text-xs bg-slate-100 px-2 py-0.5 rounded-full">
              {tag}
            </span>
          )}
        </div>
        <p className="text-sm text-slate-600">{desc}</p>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-3 text-sm text-blue-600 hover:underline"
          >
            頒布ページへ →
          </a>
        )}
      </div>
    </div>
  );
}
