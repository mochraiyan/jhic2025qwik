import { component$ } from "@builder.io/qwik";

const MemberCard = component$(
  (props: { role: string; name: string; image: string }) => {
    return (
      <div class="flex flex-col items-center gap-2">
        <p class="text-2xl font-bold">{props.role}</p>
        <div class="flex h-60 w-60 rounded-2xl border-1 border-zinc-800 bg-zinc-800/20 text-2xl shadow-lg"></div>
        <p class="font-medium">{props.name}</p>
      </div>
    );
  },
);

export default component$(() => {
  return (
    <section class="mt-20 flex h-fit flex-col items-center justify-center gap-30 p-20">
      <div class="flex flex-col items-center text-center">
        <h1 class="text-4xl font-medium">Struktur Organisasi</h1>
        <p class="-mt-1 text-2xl font-semibold">SMK NEGERI 2 SINGOSARI</p>
      </div>
      <div class="flex flex-col gap-10">
        <MemberCard role="Kepala Sekolah" name="Sumijah S.Pd, M.Si" image="" />
        <div class="flex gap-20">
          <MemberCard
            role="Kepala Sekolah"
            name="Sumijah S.Pd, M.Si"
            image=""
          />
          <MemberCard
            role="Kepala Sekolah"
            name="Sumijah S.Pd, M.Si"
            image=""
          />
          <MemberCard
            role="Kepala Sekolah"
            name="Sumijah S.Pd, M.Si"
            image=""
          />
        </div>
        <div class="flex items-center justify-center gap-20">
          <MemberCard
            role="Kepala Sekolah"
            name="Sumijah S.Pd, M.Si"
            image=""
          />
          <MemberCard
            role="Kepala Sekolah"
            name="Sumijah S.Pd, M.Si"
            image=""
          />
        </div>
      </div>
      <div class="flex flex-col items-center justify-center gap-20">
        <h1 class="text-5xl font-bold">Kurikulum</h1>
        <div class="flex gap-20">
          <MemberCard
            role="Kepala Sekolah"
            name="Sumijah S.Pd, M.Si"
            image=""
          />
          <MemberCard
            role="Kepala Sekolah"
            name="Sumijah S.Pd, M.Si"
            image=""
          />
          <MemberCard
            role="Kepala Sekolah"
            name="Sumijah S.Pd, M.Si"
            image=""
          />
          <MemberCard
            role="Kepala Sekolah"
            name="Sumijah S.Pd, M.Si"
            image=""
          />
        </div>
      </div>
      <div class="flex flex-col items-center justify-center gap-20">
        <h1 class="text-5xl font-bold">Kesiswaan</h1>
        <div class="grid grid-cols-3 gap-20">
          <MemberCard
            role="Kepala Sekolah"
            name="Sumijah S.Pd, M.Si"
            image=""
          />
          <MemberCard
            role="Kepala Sekolah"
            name="Sumijah S.Pd, M.Si"
            image=""
          />
          <MemberCard
            role="Kepala Sekolah"
            name="Sumijah S.Pd, M.Si"
            image=""
          />
          <MemberCard
            role="Kepala Sekolah"
            name="Sumijah S.Pd, M.Si"
            image=""
          />
          <MemberCard
            role="Kepala Sekolah"
            name="Sumijah S.Pd, M.Si"
            image=""
          />
          <MemberCard
            role="Kepala Sekolah"
            name="Sumijah S.Pd, M.Si"
            image=""
          />
        </div>
      </div>
      <div class="flex flex-col items-center justify-center gap-20">
        <h1 class="text-5xl font-bold">Sarpras</h1>
        <div class="flex gap-20">
          <MemberCard
            role="Kepala Sekolah"
            name="Sumijah S.Pd, M.Si"
            image=""
          />
          <MemberCard
            role="Kepala Sekolah"
            name="Sumijah S.Pd, M.Si"
            image=""
          />
          <MemberCard
            role="Kepala Sekolah"
            name="Sumijah S.Pd, M.Si"
            image=""
          />
        </div>
      </div>
      <div class="flex flex-col items-center justify-center gap-20">
        <h1 class="text-5xl font-bold">Humas</h1>
        <div class="flex flex-col gap-20">
          <MemberCard
            role="Kepala Sekolah"
            name="Sumijah S.Pd, M.Si"
            image=""
          />
          <div class="flex gap-20">
            <MemberCard
              role="Kepala Sekolah"
              name="Sumijah S.Pd, M.Si"
              image=""
            />
            <MemberCard
              role="Kepala Sekolah"
              name="Sumijah S.Pd, M.Si"
              image=""
            />
            <MemberCard
              role="Kepala Sekolah"
              name="Sumijah S.Pd, M.Si"
              image=""
            />
          </div>
          <div class="flex items-center justify-center gap-20">
            <MemberCard
              role="Kepala Sekolah"
              name="Sumijah S.Pd, M.Si"
              image=""
            />
            <MemberCard
              role="Kepala Sekolah"
              name="Sumijah S.Pd, M.Si"
              image=""
            />
          </div>
        </div>
      </div>
    </section>
  );
});
