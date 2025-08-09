import { component$, useSignal } from "@builder.io/qwik";
import { LuChevronDown } from "@qwikest/icons/lucide";

const MenuItem = component$((props: { title: string; items: string[] }) => {
  const isHovered = useSignal(false);
  const timeoutId = useSignal<NodeJS.Timeout | null>(null);

  return (
    <div class="relative flex items-center">
      <p
        onMouseEnter$={() => {
          if (timeoutId.value) {
            clearTimeout(timeoutId.value);
            timeoutId.value = null;
          }
          isHovered.value = true;
        }}
        onMouseLeave$={() => {
          timeoutId.value = setTimeout(() => {
            isHovered.value = false;
            timeoutId.value = null;
          }, 300);
        }}
        class="flex cursor-pointer items-center justify-center gap-2 text-lg transition hover:text-blue-600"
      >
        {props.title}
        <LuChevronDown
          class={`text-2xl transition-transform duration-300 ease-in-out ${isHovered.value ? "rotate-180" : "rotate-0"}`}
        />
      </p>

      {isHovered.value && (
        <div
          onMouseEnter$={() => {
            if (timeoutId.value) {
              clearTimeout(timeoutId.value);
              timeoutId.value = null;
            }
            isHovered.value = true;
          }}
          onMouseLeave$={() => {
            timeoutId.value = setTimeout(() => {
              isHovered.value = false;
              timeoutId.value = null;
            }, 300);
          }}
          class="absolute top-full left-1/2 z-50 mt-3 flex w-48 -translate-x-1/2 transform flex-col items-center justify-center gap-5 rounded-lg border-1 border-zinc-700 bg-zinc-800 p-4 py-2 shadow-lg"
        >
          {props.items.map((item, i) => {
            return <a key={i}>{item}</a>;
          })}
        </div>
      )}
    </div>
  );
});

export default component$(() => {
  return (
    <>
      <header class="fixed top-4 right-10 left-10 z-100 flex flex-row justify-between rounded-full bg-blue-800/30 p-4 pr-10 pl-4 opacity-95 shadow-lg backdrop-blur-lg">
        <div class="flex items-center gap-3">
          <img
            src="/logo.webp"
            width={60}
            height={60}
            alt="Logo SMKN 2 Singosari"
          />
          <div>
            <p class="text-2xl font-semibold">STEMDASI</p>
            <p class="-mt-2 text-sm font-medium">SMKN 2 Singosari</p>
          </div>
        </div>
        <div class="flex flex-row gap-10">
          <MenuItem title="Struktur" items={["Lorem", "Lorem", "Lorem"]} />
          <MenuItem title="Profil" items={["Lorem", "Lorem", "Lorem"]} />
          <MenuItem title="Extra" items={["Lorem", "Lorem", "Lorem"]} />
        </div>
        <div class="flex items-center justify-center text-3xl"></div>
      </header>
    </>
  );
});
