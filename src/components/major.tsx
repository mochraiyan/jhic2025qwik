import { $, component$, useSignal } from "@builder.io/qwik";
import { LuArrowLeft, LuArrowRight } from "@qwikest/icons/lucide";

const Major = component$(
  (props: { video: string; logo: string; title: string }) => {
    return (
      <div class="flex gap-x-2.5 transition-transform hover:scale-102">
        <div class="rounded-lg bg-zinc-800/20 p-2">
          <div
            class={`flex h-90 w-60 flex-row items-end justify-start rounded-lg p-6 bg-[url(/${props.video})] bg-cover bg-no-repeat object-contain`}
          >
            <div class="flex w-full items-center justify-between gap-4 text-end">
              <img src={props.logo} width={45} height={45} />
              <p class="text-md font-semibold">{props.title}</p>
            </div>
          </div>
        </div>
      </div>
    );
  },
);

export default component$(() => {
  const scrollContainerRef = useSignal<HTMLDivElement | undefined>(undefined);

  const scrollRight = $(() => {
    if (scrollContainerRef.value) {
      scrollContainerRef.value.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  });

  const scrollLeft = $(() => {
    if (scrollContainerRef.value) {
      scrollContainerRef.value.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
  });

  return (
    <>
      <section class="flex h-screen flex-col items-center justify-center gap-10">
        <h1 class="text-3xl font-bold">Jurusan</h1>
        <div class="flex items-center justify-center gap-10 transition">
          <div class="flex items-center justify-center rounded-full border-1 border-zinc-800 bg-zinc-800/20 p-2 shadow-lg transition hover:bg-orange-600">
            <LuArrowLeft
              class="cursor-pointer text-4xl"
              onClick$={scrollLeft}
            />
          </div>
          <div
            class="no-scrollbar flex w-269 gap-2 overflow-x-scroll rounded-2xl bg-zinc-800/20 p-4 shadow-lg"
            ref={scrollContainerRef}
          >
            <Major
              video="front.avif"
              logo="RPL.webp"
              title="Rekayasa Perangkat Lunak"
            />
            <Major
              video="front.avif"
              logo="TKJ.webp"
              title="Teknik Komputer Jaringan"
            />
            <Major
              video="front.avif"
              logo="DKV.webp"
              title="Desain Komunikasi Visual"
            />
            <Major video="front.avif" logo="AV.webp" title="Audio Video" />
            <Major video="front.avif" logo="AN.webp" title="Animasi" />
            <Major video="front.avif" logo="BC.webp" title="Broadcasting" />
            <Major video="front.avif" logo="MT.webp" title="Mekatronika" />
            <Major
              video="front.avif"
              logo="EI.webp"
              title="Elektronika Industri"
            />
          </div>
          <div class="flex items-center justify-center rounded-full border-1 border-zinc-800 bg-zinc-800/20 p-2 shadow-lg transition hover:bg-orange-600">
            <LuArrowRight
              class="cursor-pointer text-4xl"
              onClick$={scrollRight}
            />
          </div>
        </div>
      </section>
    </>
  );
});
