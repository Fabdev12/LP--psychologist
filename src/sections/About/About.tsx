import { motion } from "motion/react";
import { Container } from "../../components/ui/Container/Container";
export function About() {
  return (
    <section id="sobre" className="bg-[#fbfcfa] py-20 sm:py-28">
      <Container className="grid items-center gap-12 md:grid-cols-[1fr_.9fr] md:gap-20">
        <div className="order-2 md:order-1">
          <p className="eyebrow mb-4">Sobre mim</p>
          <h2 className="font-display text-3xl leading-[1.2] tracking-[-.035em] text-[#39494d] sm:text-[43px]">
            Cuidar também é aprender a olhar para a própria história.
          </h2>
          <div className="mt-6 space-y-4 text-sm leading-7 text-[#788589]">
            <p>
              Olá, sou Lucas Almeida, psicólogo. Acredito na importância de um
              espaço de escuta cuidadoso, onde cada pessoa possa falar sobre
              suas experiências com respeito e liberdade.
            </p>
            <p>
              Meu trabalho é pautado pela ética, pelo acolhimento e pela
              construção de um processo terapêutico que considere a
              singularidade de cada pessoa.
            </p>
          </div>
          <a
            href="#contato"
            className="mt-8 inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[.15em] text-[#5c98aa]"
          >
            Vamos conversar ↗
          </a>
          <p className="mt-8 text-[10px] leading-5 text-[#9aa5a6]">
            Texto demonstrativo: formação, abordagem e informações profissionais
            deverão ser atualizadas com os dados reais.
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="order-1 md:order-2"
        >
          <img
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1000&q=85"
            alt="Retrato masculino em ambiente externo"
            className="h-[390px] w-full rounded-[30px] object-cover object-center sm:h-[500px]"
          />
        </motion.div>
      </Container>
    </section>
  );
}
