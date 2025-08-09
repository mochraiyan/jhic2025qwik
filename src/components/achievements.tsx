import { component$ } from "@builder.io/qwik";

import { LuArrowLeft, LuArrowRight } from "@qwikest/icons/lucide";

export default component$(() => {
  return (
    <section class="mt-20 flex h-screen flex-col items-center justify-center gap-10">
      <h1 class="text-3xl font-bold">Prestasi Terbaru</h1>
      <div class="container mx-auto flex w-200 flex-col items-center justify-center gap-10 rounded-lg bg-zinc-800/20 p-10 shadow-lg">
        <div class="flex items-center justify-center gap-10">
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
        <div class="h-1 w-full items-end border-t-1 border-t-zinc-800"></div>
        <div class="flex w-full items-end justify-end">
          <div class="flex items-center gap-5">
            <p class="text-2xl font-bold text-zinc-500">1/3</p>
            <div class="flex cursor-pointer items-center justify-center rounded-full border-1 border-zinc-800 bg-zinc-800/20 p-2 text-2xl transition hover:bg-orange-600">
              <LuArrowLeft />
            </div>
            <div class="flex cursor-pointer items-center justify-center rounded-full border-1 border-zinc-800 bg-zinc-800/20 p-2 text-2xl transition hover:bg-orange-600">
              <LuArrowRight />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
