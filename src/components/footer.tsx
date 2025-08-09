import { component$ } from "@builder.io/qwik";
import {
  SiInstagram,
  SiYoutube,
  SiFacebook,
  SiX,
} from "@qwikest/icons/simpleicons";

export default component$(() => {
  return (
    <>
      <footer class="flex w-full flex-col items-center justify-center border-t-1 border-t-zinc-800">
        <div class="flex items-center justify-center gap-100 p-5">
          <div class="flex flex-col items-center justify-center gap-4">
            <img
              src="/logo.webp"
              width={100}
              height={100}
              alt="Logo SMKN2 Singosari"
            />
            <div class="text-md flex items-center justify-center gap-4 rounded-full border-1 border-blue-700/50 bg-blue-700/20 p-2 pr-4 pl-4 text-blue-600">
              <SiInstagram class="cursor-pointer" />
              <SiYoutube class="cursor-pointer" />
              <SiFacebook class="cursor-pointer" />
              <SiX class="cursor-pointer" />
            </div>
          </div>
          <div class="flex justify-between gap-10">
            <div class="container">
              <h1 class="text-lg font-bold">Lorem</h1>
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
              <h1 class="text-lg font-bold">Lorem</h1>
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
              <h1 class="text-lg font-bold">Lorem</h1>
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
        <div class="flex w-9/12 items-center justify-center border-t-1 border-t-zinc-800 p-2">
          <p class="text-sm font-light text-zinc-400">Copyright &copy; 2025</p>
        </div>
      </footer>
    </>
  );
});
