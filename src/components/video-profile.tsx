import { component$ } from "@builder.io/qwik";
import { LuPlay } from "@qwikest/icons/lucide";

export default component$(() => {
  return (
    <>
      <section class="flex h-screen w-9/12 flex-col items-center justify-center gap-10 text-center">
        <h1 class="text-4xl font-bold">Video Profil Sekolah</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore
          sunt mollitia eius quo illo, amet dolor minima animi eaque quae? Optio
          quis non natus, cumque id atque. Nam, accusantium iste.
        </p>
        <div class="flex h-120 w-180 flex-col items-center justify-center gap-10 bg-gray-500">
          <LuPlay class="cursor-pointer text-4xl" />
        </div>
      </section>
    </>
  );
});
