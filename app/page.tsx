import { socials } from "./data";

export default function Page() {
  return (
    <section>
      <div className="mb-8">
        <h1 className="font-bold text-2xl mb-2 tracking-tighter">
          Sunny More
        </h1>
        <div className="flex space-x-2">
          {socials.map((social) => (
            <a
              key={social.alt}
              href={social.href}
              className="rounded-md hover:bg-neutral-200 dark:hover:bg-neutral-800 p-2"
            >
              {social.logo}
            </a>
          ))}
        </div>
      </div>
      <p className="prose prose-neutral dark:prose-invert">
        I’m a passionate and dedicated software engineer, driven by curiosity and a commitment to solving complex problems. With a focus on delivering thoughtful and impactful solutions, I aim to bring innovation and simplicity to everything I do. I believe in continuous learning and the power of collaboration to create meaningful work.
      </p>
    </section>
  );
}
