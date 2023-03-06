import { AlgorithmVisualizer } from "./components/AlgorithmVisualizer";
import { Header } from "./components/Header";
import { Controls } from "./components/Controls";
import { useStore } from "./store";
import { MobileSettings } from "./components/MobileSettings";
import { MobileAlgorithmSelector } from "./components/MobileAlgorithmSelector";
import { useMediaQuery } from "usehooks-ts";
import { useEffect } from "react";
import { Sidebar } from "./components/Sidebar";
import { Separator } from "./components/ui/separator";
import { MobileHeader } from "./components/MobileHeader";

function App() {
  const { setIsMobile, setSize } = useStore();

  const isMobile = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    setIsMobile(isMobile);
    if (isMobile) {
      setSize(20);
    }
  }, [isMobile, setIsMobile, setSize]);

  return (
    <>
      <div className="fixed top-6 right-8 z-50">
        <a
          href="https://github.com/botprogrammer"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="hover:opacity-80 transition"
        >
          <svg width="32" height="32" fill="white" viewBox="0 0 24 24">
            <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.09 0 4.43-2.69 5.41-5.25 5.7.42.36.79 1.09.79 2.2 0 1.59-.01 2.87-.01 3.26 0 .31.21.68.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z" />
          </svg>
        </a>
      </div>
      <div className="flex min-h-screen h-dvh custom-bg text-foreground">
        <Sidebar />
        <main className="lg:container lg:max-w-7xl flex flex-col gap-4 lg:gap-10 p-8 lg:p-10 h-full w-full">
          <MobileHeader />
          <div className="hidden md:flex flex-col gap-10">
            <Header />
            <Separator />
          </div>
          <MobileSettings />
          <AlgorithmVisualizer />
          <MobileAlgorithmSelector />
          <Controls />
        </main>
      </div>
    </>
  );
}

export default App;
