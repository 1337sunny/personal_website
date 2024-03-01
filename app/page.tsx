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
        I am a Computer Science Engineer, having completed my engineering from MIT College.
        <br />
        Currently, I work as a Software Engineer at Microworld Software Solutions.
        <br />
        My expertise lies in Java, Spring Framework, Spring Boot, Hibernate, microservices, REST APIs, relational and non-relational databases, and cloud technologies for backend development.
        <br />
        I also have experience with JavaScript for frontend development.
      </p>
    </section>
  );
}
