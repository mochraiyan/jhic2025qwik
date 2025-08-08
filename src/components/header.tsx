import { component$ } from "@builder.io/qwik";
import { LuMenu } from "@qwikest/icons/lucide";

export default component$(() => {
  return (
    <>
      <header class="fixed top-4 right-10 left-10 z-100 flex flex-row justify-between rounded-full bg-blue-800 p-4 pr-10 pl-4 shadow-lg">
        <div class="flex items-center gap-3">
          <img
            src="logo.webp"
            width={60}
            height={60}
            alt="Logo SMKN 2 Singosari"
          />
          <div>
            <p class="text-2xl font-semibold">STEMDASI</p>
            <p class="-mt-2 text-sm font-medium">SMKN 2 Singosari</p>
          </div>
        </div>
        <div class="flex items-center justify-center text-3xl">
          <LuMenu class="cursor-pointer" />
        </div>
      </header>
    </>
  );
});
