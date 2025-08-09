import { component$ } from "@builder.io/qwik";

interface HistoryCardProps {
  year: string,
  title: string,
  description: string,
  isLeft: boolean
}

const HistoryCard = component$<HistoryCardProps>(
  ({ year, title, description, isLeft }) => {
    return (
      <div class={`flex items-center mb-8 mt-10 ${isLeft ? "justify-start" : "justify-end"}`}>
        <div class={`relative max-w-md ${isLeft ? "mr-10 text-right" : "ml-10 text-left"}`}>
          <div class="flex flex-col w-80 gap-2 rounded-lg bg-zinc-800/20 p-6 shadow-lg">
            <h2 class="font-semibold text-md text-zinc-300">{year}</h2>
            <h1 class="text-lg">{title}</h1>
            <p class="text-md text-zinc-400">{description}</p>
          </div>
        </div>
      </div>
    );
  }
);

export default component$(() => {
  return (
    <>
      <section class="mt-10 flex h-screen flex-col items-center gap-4">
        <h1 class="text-3xl font-bold">Jejak Sejarah Kami</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium,
          eligendi.
        </p>
        <div class="relative">
          <HistoryCard
            year="1980"
            title="First Impression"
            description="lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, eligendi"
            isLeft={true}
          />
          <HistoryCard
            year="1980"
            title="First Impression"
            description="lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, eligendi"
            isLeft={false}
          />
          <HistoryCard
            year="1980"
            title="First Impression"
            description="lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, eligendi"
            isLeft={true}
          />
          <HistoryCard
            year="1980"
            title="First Impression"
            description="lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, eligendi"
            isLeft={false}
          />
        </div>
      </section>
    </>
  );
});
