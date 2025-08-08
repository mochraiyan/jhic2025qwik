import { component$ } from "@builder.io/qwik";

const NewsCard = component$(
  (props: { image: string; title: string; description: string }) => {
    return (
      <div class="flex w-80 flex-col gap-2 rounded-lg bg-zinc-800/20 p-4 shadow-lg">
        <img
          src={props.image}
          alt={props.title}
          class="h-40 w-full rounded-lg object-cover"
        />
        <h2 class="text-lg font-semibold">{props.title}</h2>
        <p class="text-sm text-zinc-400">{props.description}</p>
      </div>
    );
  },
);

export default component$(() => {
  return (
    <section class="flex h-screen flex-col items-center justify-center gap-10">
      <h1 class="text-3xl font-bold">Berita Terbaru</h1>
      <div class="grid grid-cols-3 gap-5">
        <NewsCard
          image="front.avif"
          title="Berita 1"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nesciunt expedita voluptatibus praesentium exercitationem placeat corporis optio similique debitis iste?"
        />
        <NewsCard
          image="front.avif"
          title="Berita 2"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nesciunt expedita voluptatibus praesentium exercitationem placeat corporis optio similique debitis iste?"
        />
        <NewsCard
          image="front.avif"
          title="Berita 3"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nesciunt expedita voluptatibus praesentium exercitationem placeat corporis optio similique debitis iste?"
        />
        <NewsCard
          image="front.avif"
          title="Berita 4"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nesciunt expedita voluptatibus praesentium exercitationem placeat corporis optio similique debitis iste?"
        />
        <NewsCard
          image="front.avif"
          title="Berita 5"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nesciunt expedita voluptatibus praesentium exercitationem placeat corporis optio similique debitis iste?"
        />
        <NewsCard
          image="front.avif"
          title="Berita 6"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nesciunt expedita voluptatibus praesentium exercitationem placeat corporis optio similique debitis iste?"
        />
      </div>
    </section>
  );
});
