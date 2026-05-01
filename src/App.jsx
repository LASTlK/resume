const resumeData = {
  name: "ПЕТРОВ ВИТАЛИЙ",
  role: "FRONTEND РАЗРАБОТЧИК",
  location: "Екатеринбург",
  age: "19 лет",
  contacts: {
    phone: "+7 992 002-65-69",
    email: "vit4liy-petrov1@yandex.ru",
  },
  languages: [
    { name: "Английский", level: 2, description: "A2-B1" }
  ],
  skills: [
    { name: "JavaScript", level: 3 },
    { name: "TypeScript", level: 3 },
    { name: "HTML, CSS", level: 4 },
    { name: "Git", level: 3 },
    { name: "Python", level: 2 },
    { name: "C++", level: 2 }
  ],
  qualities: ["Любопытство", "Ответственность", "Целеустремленность", "Дисциплина", "Коммуникабельность"],
  education: {
    year: "2028",
    title: "УрФУ, Неполное высшее",
    details: "ИРиТ-РТФ, Информатика и вычислительная техника"
  },
  courses: {
    year: "2026",
    title: "Яндекс Практикум",
    description: "Ассоциированные программы: backend-разработчик"
  },
  about: "Любопытный студент, Frontend-энтузиаст. Пишу пет-проекты на React + Vite. В университете на проектном практикуме всегда выступаю в роли Frontend-разработчика. Не боюсь сложных задач, ведь с помощью изучения нового получаю новые необходимые знания. В свободное время занимаюсь спортом и гуляю по городу."
};

const RatingDots = ({ level, max = 4 }) => {
  return (
    <span className="rating-dots">
      {[...Array(max)].map((_, i) => (
        <span key={i} className={i < level ? "dot-filled" : "dot-empty"}>●</span>
      ))}
    </span>
  );
};

function App() {
  const data = resumeData;

  return (
    <div className="resume-container">
      <div className="resume-card">
        <aside className="sidebar">
          <div className="name-title">
            <h1>{data.name}</h1>
            <p className="role">{data.role}</p>
          </div>

          <div className="location-age">
            <p>{data.location}</p>
            <p>Возраст: {data.age}</p>
          </div>

          <div className="section">
            <h3>КОНТАКТЫ</h3>
            <div className="contact-info">
              <p>{data.contacts.phone}</p>
              <p>{data.contacts.email}</p>
            </div>
          </div>

          <div className="section">
            <h3>ЯЗЫКИ</h3>
            {data.languages.map((lang, idx) => (
              <div key={idx} className="language-item">
                <span className="lang-name">{lang.name}</span>
                <RatingDots level={lang.level} />
                <span className="lang-desc">{lang.description}</span>
              </div>
            ))}
          </div>

          <div className="section">
            <h3>НАВЫКИ</h3>
            <ul className="skills-list">
              {data.skills.map((skill, idx) => (
                <li key={idx} className="skill-item">
                  <span className="skill-name">{skill.name}</span>
                  <RatingDots level={skill.level} />
                  {skill.note && <span className="skill-note">{skill.note}</span>}
                </li>
              ))}
            </ul>
          </div>

          <div className="section">
            <h3>КАЧЕСТВА</h3>
            <ul className="qualities-list">
              {data.qualities.map((q, idx) => (
                <li key={idx}>{q}</li>
              ))}
            </ul>
          </div>
        </aside>

        <main className="main-content">
          <div className="section">
            <h3>ОБРАЗОВАНИЕ</h3>
            <div className="timeline-item">
              <div className="year">{data.education.year}</div>
              <div className="item-title">{data.education.title}</div>
              <div className="item-desc">{data.education.details}</div>
            </div>
          </div>

          <div className="section">
            <h3>КУРСЫ</h3>
            <div className="timeline-item">
              <div className="year">{data.courses.year}</div>
              <div className="item-title">{data.courses.title}</div>
              <div className="item-desc">{data.courses.description}</div>
            </div>
          </div>

          <div className="section">
            <h3>О СЕБЕ</h3>
            <p className="about-text">{data.about}</p>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;