import { component$, useSignal, $ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { LuArrowLeft, LuArrowRight, LuMove3D, LuPlay } from "@qwikest/icons/lucide";

const InformationSection = component$(() => {
  return (
    <>
      <section class="w-9/12 gap-15 flex items-center justify-center h-screen">
        <div class="flex-shrink-0 flex flex-col items-center gap-10 bg-zinc-800/20 rounded-lg p-4 border-1 border-zinc-800 shadow-lg">
          <img src="logo.webp" width={120} height={120} alt="Foto Ibu Sumijah" />
          <div class="text-center items-center justify-center flex flex-col text-md text-zinc-400 font-medium">
            <p>Kepala SMK Negeri 2 Singosari</p>
            <p>Ibu Sumijah S.Pd M.Si</p>
          </div>
        </div>
        <div class="flex flex-col gap-10">
          <h1 class="font-bold text-3xl">Lorem, ipsum.</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae suscipit inventore numquam minus ratione molestias, dolorum itaque placeat. Ipsam cum sapiente est officia incidunt delectus! Odio minima pariatur fugit distinctio!</p>
        </div>
      </section>
    </>
  )
});

const VideoProfileSekolah = component$(() => {
  return <>
    <section class="w-9/12 h-screen text-center flex flex-col gap-10 items-center justify-center">
      <h1 class="font-bold text-4xl">Video Profil Sekolah</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore sunt mollitia eius quo illo, amet dolor minima animi eaque quae? Optio quis non natus, cumque id atque. Nam, accusantium iste.</p>
      <div class="gap-10 flex flex-col justify-center items-center w-180 h-120 bg-gray-500">
        <LuPlay class="cursor-pointer text-4xl" />
      </div>
    </section>
  </>
});

const HistorySection = component$(() => {
  return <>
  <section class="mt-10 flex h-screen flex-col items-center gap-4">
    <h1 class="font-bold text-3xl">Jejak Sejarah Kami</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, eligendi.</p>
    <div class="relative">
      
    </div>
  </section>
  </>
});

const Major = component$((props: { video: string, logo: string, title: string }) => {
  return <div class="hover:scale-102 transition-transform flex gap-x-2.5">
      <div class="bg-zinc-800/20 rounded-lg p-2">
        <div class={`p-6 rounded-lg flex flex-row justify-start items-end w-60 h-90 bg-[url(/${props.video})] object-contain bg-cover bg-no-repeat`}>
          <div class="flex gap-4 w-full items-center justify-between text-end">
            <img src={props.logo} width={45} height={45} />
            <p class="font-semibold text-md">{props.title}</p>
          </div>
        </div>
    </div>
  </div>
});

const JurusanSection = component$(() => {
  const scrollContainerRef = useSignal<HTMLDivElement | undefined>(undefined);
  
  const scrollRight = $(() => {
    if (scrollContainerRef.value) {
      scrollContainerRef.value.scrollBy({
        left: 300,
        behavior: 'smooth'
      });
    }
  })

  const scrollLeft = $(() => {
    if (scrollContainerRef.value) {
      scrollContainerRef.value.scrollBy({
        left: -300,
        behavior: 'smooth'
      });
    }
  })

  return <>
  <section class="flex flex-col items-center justify-center gap-10 h-screen">
    <h1 class="font-bold text-3xl">
      Jurusan
    </h1>
    <div class="transition flex items-center justify-center gap-10">
      <div class="hover:bg-orange-600 transition flex items-center justify-center bg-zinc-800/20 border-1 border-zinc-800 p-2 rounded-full shadow-lg">
        <LuArrowLeft class="cursor-pointer text-4xl" onClick$={scrollLeft} />
      </div>
      <div class="bg-zinc-800/20 p-4 rounded-2xl shadow-lg flex gap-2 w-269 overflow-x-scroll no-scrollbar" ref={scrollContainerRef}>
        <Major video="front.avif" logo="RPL.webp" title="Rekayasa Perangkat Lunak"/>
        <Major video="front.avif" logo="TKJ.webp" title="Teknik Komputer Jaringan"/>
        <Major video="front.avif" logo="DKV.webp" title="Desain Komunikasi Visual" />
        <Major video="front.avif" logo="AV.webp" title="Audio Video"/>
        <Major video="front.avif" logo="AN.webp" title="Animasi"/>
        <Major video="front.avif" logo="BC.webp" title="Broadcasting"/>
        <Major video="front.avif" logo="MT.webp" title="Mekatronika"/>
        <Major video="front.avif" logo="EI.webp" title="Elektronika Industri"/>
      </div>
      <div class="hover:bg-orange-600 transition flex items-center justify-center bg-zinc-800/20 border-1 border-zinc-800 p-2 rounded-full shadow-lg">
        <LuArrowRight class="cursor-pointer text-4xl" onClick$={scrollRight} />
      </div>
    </div>
  </section>
  </>
});

const CardFacility = component$((props: { number: string, title: string, description: string }) => {
  return (
    <div class="flex flex-col gap-4 w-70 bg-zinc-800/20 p-6 rounded-lg shadow-lg">
      <div class="flex gap-5 text-lg">
        <p class="font-bold text-blue-600">{props.number}</p>
        <p class="font-semibold text-2xl">{props.title}</p>
      </div>
      <p>{props.description}</p>
    </div>
  );
});

export const FacilitySection = component$(() => {
  return <>
    <section class="flex flex-col items-center justify-center gap-10 h-screen">
      <h1 class="font-bold text-3xl">Fasilitas Sekolah</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, eligendi.</p>
      <div class="flex flex-row gap-5">
        <CardFacility number="01" title="Lorem" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nesciunt expedita voluptatibus praesentium exercitationem placeat corporis optio similique debitis iste?" />
        <CardFacility number="02" title="Lorem" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nesciunt expedita voluptatibus praesentium exercitationem placeat corporis optio similique debitis iste?" />
        <CardFacility number="03" title="Lorem" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nesciunt expedita voluptatibus praesentium exercitationem placeat corporis optio similique debitis iste?" />
        <CardFacility number="04" title="Lorem" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nesciunt expedita voluptatibus praesentium exercitationem placeat corporis optio similique debitis iste?" />
      </div>
    </section>
  </>
});

export default component$(() => {
  return (
    <>
      <section class="h-screen flex items-center justify-center p-5">
        <div class="w-9/12 flex flex-row gap-10 items-center justify-center">
          <div class="flex flex-col gap-2">
            <div class="flex flex-col gap-2">
              <h1 class="font-bold text-3xl">Inovasi</h1>
              <p class="text-md">Raih Prestasi</p>
            </div>
            <div class="w-45 h-1 bg-zinc-600">
            </div>
            <div class="flex flex-col gap-5">
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis, hic.</p>
              <a href="#" class="bg-zinc-800/20 border-1 border-zinc-800 hover:bg-orange-600 hover:scale-110 shadow-lg hover:border-orange-600 transition w-fit h-fit p-2 pl-4 pr-4 rounded-full font-light flex items-center justify-start gap-5">
                <LuMove3D class="text-lg" />
                View More
              </a>
            </div>
          </div>
          <div>
            <img src="logo.webp" width={400} height={400} />
          </div>
        </div>
      </section>

      <InformationSection />
      <VideoProfileSekolah />
      <HistorySection />
      <JurusanSection />
      <FacilitySection />
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
