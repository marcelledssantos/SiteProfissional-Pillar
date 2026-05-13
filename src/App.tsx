import pillarPhoto from './assets/pillar-hero.jpeg'

const whatsappLink = 'https://wa.me/5522981190713?text=Olá,%20gostaria%20de%20agendar%20uma%20sessão.'

function App() {
  const diferenciais = [
    'Atendimento acolhedor e individualizado',
    'Abordagem baseada em evidências científicas',
    'Formação continuada e atualização constante',
    'Compromisso ético e sigilo profissional',
    'Ambiente seguro para a escuta',
  ]

  const perguntas = [
    ['Quanto tempo dura cada sessão?', 'Cada sessão tem duração média de 50 minutos.'],
    ['Com que frequência as sessões acontecem?', 'Normalmente, uma vez por semana.'],
    ['O atendimento é sigiloso?', 'Sim. O sigilo profissional é um princípio ético da atuação do psicólogo.'],
    ['O atendimento é somente online?', 'Sim, atualmente os atendimentos são realizados exclusivamente na modalidade online.'],
    ['Como faço para agendar?', 'Basta entrar em contato pelo WhatsApp para verificar disponibilidade e agendar sua sessão.'],
  ]

  return (
    <main>
      <header className="header">
        <a href="#inicio" className="brand">
          <span className="brand-symbol">Ψ</span>
          <span>
            <strong>Pillar dos Santos</strong>
            <small>Psicóloga Clínica • CRP 05/83850</small>
          </span>
        </a>

        <nav>
          <a href="#sobre">Sobre</a>
          <a href="#tcc">TCC</a>
          <a href="#faq">FAQ</a>
          <a href={whatsappLink} target="_blank" className="nav-button">Agendar</a>
        </nav>
      </header>

      <section id="inicio" className="hero">
        <div className="decor decor-one" />
        <div className="decor decor-two" />

        <div className="hero-text">
          <p className="eyebrow">Psicoterapia online</p>
          <h1>Cuidando da sua saúde emocional com acolhimento e profissionalismo.</h1>
          <p className="subtitle">
            Psicoterapia online para adolescentes, adultos e idosos, com abordagem em Terapia Cognitivo-Comportamental (TCC).
            Pós-graduada em Terapia Cognitivo-Comportamental (TCC), Psicologia e desenvolvimento infantil,
            e Neurociências e comportamento.
          </p>

          <div className="hero-actions">
            <a href={whatsappLink} target="_blank" className="primary-button">Agendar sessão</a>
            <a href="#sobre" className="secondary-button">Conhecer a psicóloga</a>
          </div>
        </div>

        <div className="hero-image-card">
          <img src={pillarPhoto} alt="Pillar dos Santos Pereira, psicóloga clínica" />
          <div className="photo-caption">
            <strong>Pillar dos Santos Pereira</strong>
            <span>Psicóloga Clínica • CRP 05/83850</span>
          </div>
        </div>
      </section>

      <section id="sobre" className="section section-light">
        <div className="container two-columns">
          <div>
            <p className="eyebrow">Sobre mim</p>
            <h2>Prazer, sou Pillar dos Santos Pereira</h2>
          </div>

          <div className="text-block">
            <p>Sou psicóloga clínica (CRP 05/83850) e realizo atendimentos psicológicos online para adolescentes, adultos e idosos.</p>
            <p>Meu trabalho é fundamentado na Terapia Cognitivo-Comportamental (TCC), abordagem que auxilia na identificação e modificação de pensamentos e comportamentos que contribuem para o sofrimento emocional.</p>
            <p>A psicoterapia é um espaço seguro de escuta, acolhimento e transformação, onde você pode compreender melhor suas emoções, desenvolver novas estratégias para lidar com os desafios da vida e fortalecer sua saúde mental.</p>
          </div>
        </div>
      </section>

      <section id="tcc" className="section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Abordagem terapêutica</p>
            <h2>Terapia Cognitivo-Comportamental</h2>
          </div>

          <div className="content-card">
            <p>A Terapia Cognitivo-Comportamental é uma abordagem que busca compreender a relação entre pensamentos, emoções e comportamentos.</p>
            <p>Durante o processo terapêutico, trabalhamos para identificar padrões que podem estar contribuindo para o sofrimento emocional e desenvolvemos estratégias mais saudáveis e funcionais para lidar com as situações do cotidiano.</p>
            <p>A TCC é amplamente reconhecida pela sua eficácia no tratamento de diversas demandas, como ansiedade, depressão, dificuldades relacionais e questões de autoestima.</p>
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container two-columns">
          <div>
            <p className="eyebrow">Atendimento online</p>
            <h2>Como funciona o atendimento online</h2>
          </div>

          <div className="text-block">
            <p>As sessões são realizadas por videochamada, em ambiente sigiloso e seguro.</p>
            <p>O atendimento online oferece praticidade, flexibilidade e conforto, permitindo que você realize sua terapia de qualquer lugar com privacidade.</p>
            <p>Geralmente, os atendimentos acontecem uma vez por semana, de acordo com as necessidades de cada pessoa.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Diferenciais</p>
            <h2>Diferenciais do atendimento</h2>
          </div>

          <div className="cards">
            {diferenciais.map((item, index) => (
              <article className="card" key={item}>
                <span>0{index + 1}</span>
                <h3>{item}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="section section-light">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Perguntas frequentes</p>
            <h2>Dúvidas comuns antes de começar</h2>
          </div>

          <div className="faq-list">
            {perguntas.map(([pergunta, resposta]) => (
              <details key={pergunta} className="faq-item">
                <summary>{pergunta}</summary>
                <p>{resposta}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container cta-content">
          <p>“Buscar ajuda é um ato de coragem e cuidado consigo mesmo”</p>
          <h2>Iniciar a psicoterapia é um passo importante de cuidado consigo mesmo.</h2>
          <span>Se desejar começar esse processo, entre em contato para agendar sua sessão.</span>
        </div>
      </section>

<footer className="footer">
  <div className="container footer-grid">
    <div>
      <h3>Pillar dos Santos</h3>
      <p>Psicóloga Clínica</p>
      <p>CRP 05/83850</p>
    </div>

    <div>
      <strong>Contato</strong>

  <div className="social-links">
  <a href="https://wa.me/5522981190713" target="_blank">
    <img
      src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
      alt="WhatsApp"
      className="social-icon"
    />
  </a>

  <a href="https://instagram.com/psi.pillar" target="_blank">
    <img
      src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
      alt="Instagram"
      className="social-icon"
    />
  </a>
</div>
      <a href="mailto:pillarsantos.psi@gmail.com">
        pillarsantos.psi@gmail.com
      </a>
    </div>
  </div>
</footer>

      <a href={whatsappLink} target="_blank" className="floating-whatsapp">WhatsApp</a>
    </main>
  )
}

export default App
