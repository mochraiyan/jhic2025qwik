import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <>
      <section class="mb-30 flex h-fit w-9/12 items-center justify-center gap-15">
        <div class="flex flex-shrink-0 flex-col items-center gap-10 rounded-lg border-1 border-zinc-800 bg-zinc-800/20 p-4 shadow-lg">
          <img
            src="logo.webp"
            width={120}
            height={120}
            alt="Foto Ibu Sumijah"
          />
          <div class="text-md flex flex-col items-center justify-center text-center font-medium text-zinc-400">
            <p>Kepala SMK Negeri 2 Singosari</p>
            <p>Ibu Sumijah S.Pd M.Si</p>
          </div>
        </div>
        <div class="flex flex-col gap-10">
          <h1 class="text-3xl font-bold">Lorem, ipsum.</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            suscipit inventore numquam minus ratione molestias, dolorum itaque
            placeat. Ipsam cum sapiente est officia incidunt delectus! Odio
            minima pariatur fugit distinctio!
          </p>
        </div>
      </section>
    </>
  );
});
