import { component$ } from "@builder.io/qwik";
import { SiInstagram, SiYoutube, SiFacebook, SiX } from "@qwikest/icons/simpleicons"

export default component$(() => {
    return <>
        <footer class="flex items-center justify-center flex-col w-full border-t-1 border-t-zinc-800">
            <div class="flex items-center justify-center p-5 gap-250">
                <div class="justify-center items-center flex flex-col gap-4">
                    <img src="logo.webp" width={100} height={100} alt="Logo SMKN2 Singosari" />
                    <div class="text-md text-blue-600 flex gap-4 items-center justify-center bg-blue-700/20 p-2 pr-4 pl-4 rounded-full border-1 border-blue-700/50">
                        <SiInstagram class="cursor-pointer" />
                        <SiYoutube class="cursor-pointer" />
                        <SiFacebook class="cursor-pointer" />
                        <SiX class="cursor-pointer" />
                    </div>
                </div>
                <div class="flex gap-10 justify-between">
                    <div class="container">
                        <h1 class="font-bold text-lg">Lorem</h1>
                        <ul>
                            <li class="flex flex-col items-end">
                                <a href="#">Home</a>
                                <a href="#">Home</a>
                                <a href="#">Home</a>
                                <a href="#">Home</a>
                            </li>
                        </ul>
                    </div>
                    <div class="container">
                        <h1 class="font-bold text-lg">Lorem</h1>
                        <ul>
                            <li class="flex flex-col items-end">
                                <a href="#">Home</a>
                                <a href="#">Home</a>
                                <a href="#">Home</a>
                                <a href="#">Home</a>
                            </li>
                        </ul>
                    </div>
                    <div class="container">
                        <h1 class="font-bold text-lg">Lorem</h1>
                        <ul>
                            <li class="flex flex-col items-end">
                                <a href="#">Home</a>
                                <a href="#">Home</a>
                                <a href="#">Home</a>
                                <a href="#">Home</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="w-9/12 border-t-zinc-800 border-t-1  flex items-center justify-center p-2">
                <p class="font-light text-sm text-zinc-400">Copyright &copy; 2025</p>
            </div>
        </footer>
    </>
});