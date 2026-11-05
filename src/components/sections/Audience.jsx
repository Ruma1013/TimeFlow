import Container from "../ui/Container";
import { audience } from "../../data/content";

export default function Audience() {
  return (
    <section id="solutions" className="py-16 md:py-24">
      <Container>
        <h2 className="text-balance text-3xl font-medium capitalize tracking-[-0.02em] text-black md:text-[40px] md:leading-[1.2]">
          Built for every way you work.
        </h2>
        <div className="relative mt-10 items-center grid gap-8 lg:grid-cols-[640px_1fr]">
          <ul className="relative z-10 space-y-3.5">
            {audience.map((a, i) => (
              <li
                key={a.title}
                className="rounded-xl bg-white p-5 shadow-[0_8px_30px_rgba(0,0,0,0.06)] md:px-10"
              >
                <p className="flex items-center gap-2 text-xl font-semibold text-heading">
                  <span className="grid size-6 place-items-center rounded-full bg-primary text-sm font-medium text-white">
                    {i + 1}
                  </span>
                  {a.title}
                </p>
                <p className="mt-2 text-body">{a.text}</p>
              </li>
            ))}
          </ul>
          <img
            src="/images/audience.webp"
            alt="Team reviewing charts and reports around a meeting table"
            width="1344"
            height="1140"
            loading="lazy"
            className="h-[280px] w-full rounded-2xl object-cover sm:h-[400px] lg:-ml-48 lg:h-[570px] lg:w-[calc(100%+12rem)] lg:max-w-none"
          />
        </div>
      </Container>
    </section>
  );
}
