import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Container } from "../../components/ui/Container/Container";
const items = [
  "Um ambiente de conversa sem julgamentos, com respeito à sua individualidade.",
  "Escuta atenta para compreender suas experiências e necessidades.",
  "Um processo construído em parceria, com objetivos alinhados à sua realidade.",
];
export function Approach() {
  return (
    <section
      id="terapia"
      className="overflow-hidden bg-[#78aebe] py-16 text-white sm:py-20"
    >
      <Container className="grid items-center gap-10 md:grid-cols-[.75fr_1.25fr] md:gap-16">
        <motion.img
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=85"
          alt="Ambiente de consultório acolhedor e iluminado"
          className="h-[360px] w-full rounded-[28px] object-cover sm:h-[440px]"
        />
        <div>
          <p className="eyebrow !text-white/75">Como funciona</p>
          <h2 className="font-display mt-4 text-4xl leading-tight tracking-[-.035em] sm:text-[48px]">
            O que esperar da terapia?
          </h2>
          <p className="mt-5 max-w-xl text-sm leading-7 text-white/80">
            A psicoterapia oferece um espaço profissional de escuta e reflexão.
            Os encontros são conduzidos com cuidado, sigilo e atenção à
            singularidade de cada pessoa.
          </p>
          <div className="mt-8 space-y-5">
            {items.map((item) => (
              <div
                key={item}
                className="flex items-start gap-4 border-b border-white/20 pb-5"
              >
                <ArrowRight className="mt-1 shrink-0" size={17} />
                <p className="text-sm leading-6 text-white/90">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
