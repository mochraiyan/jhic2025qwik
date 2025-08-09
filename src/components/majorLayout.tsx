import { component$ } from "@builder.io/qwik";
import { LuPlay } from "@qwikest/icons/lucide";

export default component$(
    (props: {majorName: string, teacherName: string, majorImage: string, teacherImage: string, majorDesc: string, teacherDesc: string}) => {
    return (
        <section class="w-9/12 mt-10 flex flex-col justify-center items-center">
            <div class="flex flex-col justify-center items-center">
                <div class="flex justify-around items-center gap-2.5">
                    <img
                        src={props.majorImage}
                        alt="RPL.webp"
                        width={200}
                        height={200}
                        class="object-cover"
                    />
                    <h1>{props.majorName}</h1>
                </div>
                <p>{props.majorDesc}</p>
            </div>

            <div class="">
                <div class="">
                    <h2>Tim {props.majorName}</h2>
                    <img
                        src={props.teacherImage}
                        alt="Guru Produktif"
                        width={120}
                        height={120}
                        class="object-cover"
                    />
                    <div class="">
                        <h3>{props.teacherName}</h3>
                        <p>{props.teacherDesc}</p>
                    </div>
                </div>
                <div class="">
                    <p>Quote Kapro</p>
                </div>
            </div>

            <div class="flex h-screen w-9/12 flex-col items-center justify-center gap-10 text-left">
                <h1>Video Profil Jurusan {props.majorName}</h1>
                <div class="flex h-120 w-180 flex-col items-center justify-center gap-10 bg-gray-500">
                    <LuPlay class="cursor-pointer text-4xl" />
                </div>
            </div>
 
            <div class="flex h-screen w-9/12 flex-col justify-center items-center gap-10 text-left">
                <h1>Minigames {props.majorName}</h1>
                <div class="">
                    {/* Playground Minigames */}
                </div>
            </div>

        </section>
    );
});