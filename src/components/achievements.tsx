import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <section class="flex h-screen flex-col items-center justify-center gap-10">
      <h1 class="text-3xl font-bold">Prestasi Terbaru</h1>
      <div class="container mx-auto flex w-9/12 flex-row items-center justify-center gap-10">
        <div class="flex h-70 w-90 shrink-0 rounded-lg bg-zinc-800/20 p-2 shadow-lg">
          <img
            src="/front.avif"
            class="h-full w-full rounded-lg"
            alt="Gambar Berita"
          />
        </div>
        <div class="flex flex-col gap-4 p-4">
          <h2 class="text-3xl font-semibold">Prestasi 1</h2>
          <p class="text-sm text-zinc-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
            nesciunt expedita voluptatibus praesentium exercitationem placeat
            corporis optio similique debitis iste?
          </p>
        </div>
      </div>
    </section>
  );
});
