import { motion } from 'motion/react';
import { Apple, Monitor } from 'lucide-react';

export default function App() {
  const baseUrl = import.meta.env.BASE_URL;
  const logoSrc = `${baseUrl}logo.png`;
  const movieSrc = `${baseUrl}movie.mp4`;

  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-[#050505] text-white">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      >
        <source src={movieSrc} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.72)_0%,rgba(3,7,18,0.58)_35%,rgba(2,6,23,0.84)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(91,141,239,0.18),transparent_42%),radial-gradient(circle_at_bottom,rgba(14,165,233,0.12),transparent_32%)]" />

      <nav className="relative z-10 flex min-h-[88px] items-center justify-between px-6 py-5 md:px-10 xl:px-16">
        <div className="flex items-center gap-3">
          <img
            src={logoSrc}
            alt="影视百宝箱"
            className="h-12 w-12 rounded-2xl object-cover shadow-[0_18px_40px_rgba(0,0,0,0.28)]"
          />
          <div className="text-[18px] font-semibold tracking-[0.24em] text-white/92 md:text-[20px]">
            影视百宝箱
          </div>
        </div>

        <div className="hidden items-center gap-6 text-[14px] text-white/72 md:flex lg:gap-10">
          {/* <span className="cursor-pointer transition-colors hover:text-white">功能特性</span>
          <span className="cursor-pointer transition-colors hover:text-white">更新日志</span>
          <span className="cursor-pointer transition-colors hover:text-white">使用教程</span> */}
        </div>
      </nav>

      <main className="relative z-10 flex flex-1 items-center justify-center px-6 pb-12 pt-6 md:px-10 md:pb-16 md:pt-10 xl:px-16">
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="mx-auto flex w-full max-w-5xl flex-col items-center text-center"
        >
          <div className="mb-6 rounded-full border border-white/16 bg-white/8 px-4 py-2 text-[12px] font-medium tracking-[0.28em] text-white/78 backdrop-blur-md md:mb-8">
            CINEMORA
          </div>

          <h1 className="max-w-4xl text-[44px] font-black leading-[1.06] tracking-[0.04em] text-white md:text-[72px] xl:text-[92px]">
            你的全能
            <br />
            影视创作工具箱
          </h1>

          <p className="mt-6 max-w-2xl text-[15px] leading-[1.8] text-white/76 md:mt-8 md:text-[18px]">
            提升影视制作便利性的一些工具
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
            <a
              href="https://github.com/zstar1003/Cinemora-website/releases/download/v0.1.0/Cinemora_0.1.0_x64-setup.exe"
              className="flex items-center gap-2 rounded-full bg-white px-7 py-4 text-[14px] font-semibold text-[#050505] transition-all hover:scale-[1.02] hover:bg-white/92"
            >
              <Monitor className="w-5 h-5" />
              <span>下载 Windows 版</span>
            </a>
            <a
              href="https://github.com/zstar1003/Cinemora-website/releases/download/v0.1.0/Cinemora_0.1.0_aarch64.dmg"
              className="flex items-center gap-2 rounded-full border border-white/18 bg-white/8 px-7 py-4 text-[14px] font-semibold text-white backdrop-blur-md transition-all hover:scale-[1.02] hover:bg-white/12"
            >
              <Apple className="w-5 h-5" />
              <span>下载 macOS 版</span>
            </a>
          </div>

          <div className="mt-14 h-px w-full max-w-xl bg-gradient-to-r from-transparent via-white/28 to-transparent" />
        </motion.section>
      </main>

      <footer className="relative z-10 px-6 pb-8 pt-2 text-center text-[12px] tracking-[0.16em] text-white/62 md:px-10 xl:px-16">
        <div>&copy; 2026 影视百宝箱 版权所有</div>
      </footer>
    </div>
  );
}
