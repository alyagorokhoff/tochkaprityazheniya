import { ArrowDown, ArrowUpRight, Check, Heart, MessageCircle, Sparkles, Waves, Zap } from "lucide-react";

const telegramUrl = "https://t.me/Alyasmile";
const whatsappUrl = "https://wa.me/79282661318";
const personalTelegramUrl = `${telegramUrl}?text=${encodeURIComponent("Аля, здравствуйте! Я хочу войти в «Точку притяжения». Подскажите, пожалуйста, как присоединиться?")}`;
const friendTelegramUrl = `${telegramUrl}?text=${encodeURIComponent("Аля, здравствуйте! Мы хотим прийти в «Точку притяжения» вдвоём с подругой. Подскажите, пожалуйста, условия участия для нас?")}`;
const questionWhatsappUrl = `${whatsappUrl}?text=${encodeURIComponent("Аля, здравствуйте! Я чувствую отклик к «Точке притяжения», но хочу сначала уточнить несколько моментов. Можно задать вам вопрос?")}`;

const value = [
  { title: "Я вижу тебя", text: "Не веду по общей схеме. Чувствую твой процесс и то, что нужно именно сейчас." },
  { title: "Я остаюсь рядом", text: "Не только во время практик. Ты можешь прийти ко мне в тот момент, когда особенно нужна опора." },
  { title: "Только живой процесс", text: "Без лекций и правильных ответов. Ты проживаешь изменения внутри своей настоящей жизни." },
];

const outcomes = [
  { icon: Waves, title: "Тело", text: "Становится мягче. Возвращаются тепло, чувствительность и выдох." },
  { icon: Heart, title: "Отношения", text: "Больше близости. Меньше страха потерять себя или другого." },
  { icon: Zap, title: "Деньги", text: "Ты перестаёшь уменьшать себя и разрешаешь себе принимать больше." },
  { icon: Sparkles, title: "Реализация", text: "Появляется энергия идти туда, куда тебя давно тянет." },
];

const firstPhase = ["Освобождение накопленного напряжения", "Страх, вина, контроль и чужие ожидания", "Выход из повторяющихся сценариев"];
const secondPhase = ["Возвращение контакта с телом", "Чувственность, желание и право хотеть", "Опора на себя вместо внутренней борьбы"];
const thirdPhase = ["Новое состояние в отношениях и деньгах", "Смелость выбирать то, что действительно твоё", "Закрепление изменений в живой реальности"];
const reviews = [
  { src: "/reviews/review-01.webp", alt: "Отзыв участницы о внутренней силе" },
  { src: "/reviews/review-06.webp", alt: "Отзыв участницы о расслаблении и тепле в теле" },
  { src: "/reviews/review-05.webp", alt: "Отзыв участницы об отношениях с мужем" },
  { src: "/reviews/review-03.webp", alt: "Отзыв участницы о лёгкости после практики" },
  { src: "/reviews/review-04.webp", alt: "Отзыв участницы о возвращении энергии" },
  { src: "/reviews/review-09.webp", alt: "Отзыв участницы о новом уровне отношений" },
  { src: "/reviews/review-02.webp", alt: "Отзыв участницы о принятии и любви к себе" },
  { src: "/reviews/review-07.webp", alt: "Отзыв участницы об освобождении от напряжения" },
  { src: "/reviews/review-08.webp", alt: "Отзыв участницы о спокойствии и переменах в жизни" },
];

export default function Home() {
  return (
    <main>
      <section className="hero" id="top">
        <div className="hero-shade" aria-hidden="true" />
        <nav className="nav shell" aria-label="Основная навигация">
          <a className="brand" href="#top">ALYA</a>
          <div className="nav-menu">
            <a className="nav-link" href="#inside">Что внутри</a>
            <a className="nav-link" href="#reviews">Отзывы</a>
            <a className="nav-link nav-cta" href="#join">Участие</a>
          </div>
        </nav>
        <div className="hero-content shell">
          <p className="eyebrow">Точка притяжения · 1,5 месяца · личное сопровождение</p>
          <h1 className="hero-title-short"><span>Не стать другой.</span><em>Снова стать живой.</em></h1>
          <p className="hero-copy">Закрытое пространство, где не нужно быть сильной. Можно услышать тело, встретиться со своими настоящими желаниями и позволить жизни меняться изнутри.</p>
          <div className="hero-actions"><a className="button button-primary" href="#constellation">Заглянуть внутрь <ArrowDown size={18} /></a></div>
          <span className="microcopy hero-microcopy">Для женщины, которая больше не хочет возвращаться в прежнюю точку</span>
        </div>
      </section>

      <section className="recognition section shell recognition-compact">
        <p className="eyebrow">Возможно, ты просто устала быть сильной</p>
        <div className="recognition-grid">
          <h2>Ты не потерялась. <em>Ты слишком долго жила в напряжении.</em></h2>
          <div className="recognition-copy"><p>Когда внутри всё время нужно держаться, даже любовь, деньги и отдых становятся ещё одной задачей.</p><strong>Здесь можно перестать справляться. И снова услышать себя.</strong></div>
        </div>
      </section>

      <section className="constellation-section section" id="constellation">
        <div className="constellation-glow" aria-hidden="true" />
        <div className="shell constellation-layout">
          <div className="constellation-copy">
            <p className="eyebrow">То, что будет только твоим</p>
            <h2>Твоё созвездие</h2>
            <p className="constellation-lead">В течение пути твоё созвездие будет открываться слой за слоем. Оно покажет, <strong>в чём твоя сила, что возвращает тебя в ресурс и через что раскрываются близость, реализация и деньги.</strong></p>
            <div className="constellation-points constellation-points-soft">
              <article><span>✦</span><div><h3>На что опираться</h3><p>Твой талант и природная сила.</p></div></article>
              <article><span>✦</span><div><h3>Что тебя наполняет</h3><p>Твои настоящие источники энергии.</p></div></article>
              <article><span>✦</span><div><h3>Через что приходит больше</h3><p>Твои ключи к реализации и деньгам.</p></div></article>
            </div>
            <p className="constellation-anchor">Каждую неделю будет проявляться новая часть твоего рисунка. <em>Финальная карта не существует заранее — она соберётся из женщины, которой ты станешь в этом пути.</em></p>
          </div>
          <div className="constellation-visual">
            <div className="constellation-card-stage">
              <img className="constellation-feature-card" src="/constellation/archetype.png" alt="Пример карты Твоего созвездия" loading="lazy" />
            </div>
            <span className="constellation-note">Пример одной из карт. Твоя история будет другой.</span>
          </div>
        </div>
      </section>

      <section className="support section" id="inside">
        <div className="shell">
          <div className="section-heading compact-heading">
            <div><p className="eyebrow">Этот путь не нужно проходить одной</p><h2>Все шесть недель я рядом. Лично.</h2></div>
            <p>Я замечаю не только то, что ты говоришь. Чувствую, где тебе нужна практика, где опора, а где тишина, в которой новое может родиться само.</p>
          </div>
          <span className="mobile-swipe-hint">Листай, чтобы увидеть главное →</span>
          <div className="premium-grid">
            {value.map((item, index) => <article className="premium-card" key={item.title}><span>0{index + 1}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}
          </div>
          <div className="included-strip" aria-label="Что входит в сопровождение">
            <span><Check size={16} /> личный закрытый чат</span>
            <span><Check size={16} /> практики под твой запрос</span>
            <span><Check size={16} /> моя обратная связь</span>
            <span><Check size={16} /> поддержка на всём пути</span>
          </div>
        </div>
      </section>

      <section className="reviews section" id="reviews">
        <div className="shell">
          <div className="section-heading review-heading">
            <div><p className="eyebrow">Живой опыт</p><h2>Что изменилось у женщин.</h2></div>
            <p>Тело. Отношения. Жизнь.</p>
          </div>
          <span className="review-hint">Листай отзывы →</span>
          <div className="review-grid">{reviews.map((review, index) => <figure className="review-card" key={review.src}><span className="review-number">{String(index + 1).padStart(2, "0")}</span><img src={review.src} alt={review.alt} loading="lazy" /></figure>)}</div>
          <p className="results-note">Это личный опыт участниц. Результаты каждого человека индивидуальны.</p>
        </div>
      </section>

      <section className="outcomes section shell" id="results">
        <p className="eyebrow">Когда внутри становится тише</p>
        <h2 className="outcomes-title">Ты не заставляешь жизнь меняться. Ты начинаешь выбирать иначе.</h2>
        <span className="mobile-swipe-hint outcomes-hint">Листай сферы изменений →</span>
        <div className="outcome-grid">{outcomes.map(({ icon: Icon, title, text }) => <article className="outcome" key={title}><Icon size={26} /><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="program section shell" id="program">
        <div className="section-heading compact-heading">
          <div><p className="eyebrow">Шесть недель · три внутренних перехода</p><h2>Освободить. Вернуться. Начать жить иначе.</h2></div>
          <p>Не по жёсткому плану. Через практики, которые встречают тебя именно там, где ты находишься.</p>
        </div>
        <span className="program-hint">Листай программу →</span>
        <div className="month-grid concise-months">
          <article className="month-card month-release"><div className="month-intro"><span className="month-number">01</span><p className="eyebrow">Недели 1–2</p><h3>Освобождение</h3></div><div className="step-list">{firstPhase.map((item) => <div className="step" key={item}><Check size={17} /><span>{item}</span></div>)}</div></article>
          <article className="month-card month-return"><div className="month-intro"><span className="month-number">02</span><p className="eyebrow">Недели 3–4</p><h3>Возвращение</h3></div><div className="step-list">{secondPhase.map((item) => <div className="step" key={item}><Check size={17} /><span>{item}</span></div>)}</div></article>
          <article className="month-card month-fill"><div className="month-intro"><span className="month-number">03</span><p className="eyebrow">Недели 5–6</p><h3>Воплощение</h3></div><div className="step-list">{thirdPhase.map((item) => <div className="step" key={item}><Check size={17} /><span>{item}</span></div>)}</div></article>
        </div>
      </section>

      <section className="join section" id="join">
        <div className="join-glow" aria-hidden="true" />
        <div className="shell join-inner">
          <p className="eyebrow">Тебе не нужно быть готовой полностью</p><h2>Достаточно больше не хотеть <em>оставаться в прежней точке.</em></h2>
          <div className="readiness-points join-readiness"><span>быть честной с собой</span><span>входить в практики</span><span>разрешить новому стать жизнью</span></div>
          <div className="friend-format">
            <div className="friend-format-mark" aria-hidden="true"><Heart size={22} /><Heart size={15} /></div>
            <div><span className="eyebrow">Можно прийти вместе</span><h3>С подругой — особая стоимость для каждой.</h3><p>Одно пространство. Два личных пути.</p></div>
          </div>
          <p>Выбери свой формат участия.</p>
          <div className="join-actions">
            <a className="button button-primary" href={personalTelegramUrl} target="_blank" rel="noreferrer"><MessageCircle size={19} /> Войти в пространство</a>
            <a className="button button-secondary" href={friendTelegramUrl} target="_blank" rel="noreferrer"><Heart size={18} /> Прийти с подругой</a>
            <a className="button button-secondary" href={questionWhatsappUrl} target="_blank" rel="noreferrer">Задать вопрос <ArrowUpRight size={18} /></a>
          </div>
          <span className="join-note">1,5 месяца · личное сопровождение · конфиденциально</span>
        </div>
      </section>
      <footer className="footer shell"><a className="brand" href="#top">ALYA</a><span>Точка притяжения</span><a href={telegramUrl}>Связаться</a></footer>
      <a className="mobile-sticky-cta" href="#join">Участие</a>
    </main>
  );
}
