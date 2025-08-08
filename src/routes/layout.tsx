import { component$, Slot } from "@builder.io/qwik";
import Header from "~/components/header";
import Footer from "~/components/footer";

import '@fontsource/poppins/200.css';
import '@fontsource/poppins/300.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/700.css';

export default component$(() => {
  return (
    <>
      <Header />
      <main class="flex flex-col items-center justify-center">
        <Slot />
      </main>
      <Footer />
    </>
  );
});