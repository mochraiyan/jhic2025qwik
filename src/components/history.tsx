import { component$ } from "@builder.io/qwik";

interface HistoryCardProps {
  year: string;
  title: string;
  description: string;
  isLeft: boolean;
}

const HistoryCard = component$<HistoryCardProps>(
  ({ year, title, description, isLeft }) => {
    return (
      <div
        class={`mt-10 mb-8 flex items-center ${isLeft ? "justify-start" : "justify-end"}`}
      >
        <div
          class={`relative max-w-md ${isLeft ? "mr-30 text-right" : "ml-30 text-left"}`}
        >
          <div class="flex w-80 flex-col gap-2 rounded-lg border-1 border-zinc-800 bg-zinc-800/20 p-6 shadow-lg">
            <h2
              class={`text-md font-semibold ${isLeft ? "text-blue-600" : "text-orange-600"}`}
            >
              {year}
            </h2>
            <h1 class="text-lg font-bold">{title}</h1>
            <p class="text-md text-zinc-500">{description}</p>
          </div>
        </div>
      </div>
    );
  },
);

export default component$(() => {
  return (
    <>
      <section class="mt-30 flex h-fit flex-col items-center gap-4 p-10">
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
