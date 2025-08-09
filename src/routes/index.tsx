import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { LuArrowRight } from "@qwikest/icons/lucide";

import InformationSec from "~/components/information";
import VideoProfileSec from "~/components/video-profile";
import HistorySec from "~/components/history";
import MajorSec from "~/components/major";
import FacilitySec from "~/components/facility";
import NewsSec from "~/components/news";
import AchievementsSec from "~/components/achievements";

export default component$(() => {
  return (
    <>
      <section class="flex h-screen items-center justify-center p-5">
        <div class="flex w-9/12 flex-row items-center justify-center gap-10">
          <div class="flex flex-col gap-2">
            <div class="flex flex-col gap-2">
              <h1 class="text-3xl font-bold">Inovasi</h1>
              <p class="text-md">Raih Prestasi</p>
            </div>
            <div class="mt-2.5 h-1 w-45 bg-zinc-600"></div>
            <div class="mt-2.5 flex flex-col gap-5">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Perspiciatis, hic.
              </p>
              <a
                href="#"
                class="flex h-fit w-fit items-center justify-start gap-5 rounded-full border-1 border-zinc-800 bg-zinc-800/20 p-2 pr-4 pl-4 font-light shadow-lg transition hover:scale-110 hover:border-orange-600 hover:bg-orange-600"
              >
                <LuArrowRight class="text-lg" />
                View More
              </a>
            </div>
          </div>
          <div>
            <img src="logo.webp" width={400} height={400} />
          </div>
        </div>
      </section>

      <InformationSec />
      <VideoProfileSec />
      <HistorySec />
      <MajorSec />
      <FacilitySec />
      <NewsSec />
      <AchievementsSec />
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
