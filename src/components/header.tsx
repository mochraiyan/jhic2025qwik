import { component$ } from "@builder.io/qwik";
import {LuMenu} from "@qwikest/icons/lucide";

export default component$(() => {
    return <>
    <header class="z-100 fixed flex flex-row justify-between bg-blue-800 p-4 pl-4 pr-10 rounded-full shadow-lg right-10 top-4 left-10">
        <div class="flex gap-3 items-center">
            <img src="logo.webp" width={60} height={60} alt="Logo SMKN 2 Singosari" />
            <div>
                <p class="font-semibold text-2xl">STEMDASI</p>
                <p class="font-medium text-sm -mt-2">SMKN 2 Singosari</p>
            </div>
        </div>
        <div class="flex items-center justify-center text-3xl">
            <LuMenu class="cursor-pointer" />
        </div>
    </header>
    </>
});