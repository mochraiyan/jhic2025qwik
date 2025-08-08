import { component$ } from "@builder.io/qwik";

const CardFacility = component$(
  (props: { number: string; title: string; description: string }) => {
    return (
      <div class="flex w-70 flex-col gap-4 rounded-lg bg-zinc-800/20 p-6 shadow-lg">
        <div class="flex gap-5 text-lg">
          <p
            class={`font-bold ${Number.parseInt(props.number) % 2 === 0 ? "text-blue-600" : "text-orange-600"}`}
          >
            {props.number}
          </p>
          <p class="text-2xl font-semibold">{props.title}</p>
        </div>
        <p>{props.description}</p>
      </div>
    );
  },
);

export default component$(() => {
  return (
    <>
      <section class="flex h-screen flex-col items-center justify-center gap-10">
        <h1 class="text-3xl font-bold">Fasilitas Sekolah</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium,
          eligendi.
        </p>
        <div class="flex flex-row gap-5">
          <CardFacility
            number="01"
            title="Lorem"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nesciunt expedita voluptatibus praesentium exercitationem placeat corporis optio similique debitis iste?"
          />
          <CardFacility
            number="02"
            title="Lorem"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nesciunt expedita voluptatibus praesentium exercitationem placeat corporis optio similique debitis iste?"
          />
          <CardFacility
            number="03"
            title="Lorem"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nesciunt expedita voluptatibus praesentium exercitationem placeat corporis optio similique debitis iste?"
          />
          <CardFacility
            number="04"
            title="Lorem"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nesciunt expedita voluptatibus praesentium exercitationem placeat corporis optio similique debitis iste?"
          />
        </div>
      </section>
    </>
  );
});
