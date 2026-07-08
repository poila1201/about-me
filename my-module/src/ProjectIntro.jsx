// src/ProjectIntro.jsx
function ProjectIntro() {
  const features = [
    {
      title: "인수인계 지침서",
      desc: "사장이 대화하듯 입력하면 AI가 빈틈을 되물어 가게의 암묵지를 지식 베이스로 쌓습니다.",
    },
    {
      title: "알바생 Q&A (핵심)",
      desc: "신입 알바가 눈치 안 보고 물으면, AI가 우리 가게 지침대로 즉시 답변합니다. (RAG)",
    },
    {
      title: "불만 집계·처우 개선",
      desc: "답 못한 질문과 익명 불만을 트렌드로 모아 사장에게 리포트로 전달합니다.",
    },
  ];

  return (
    <div style={styles.wrapper}>
      <p style={styles.tag}>4주 AI 에이전트 프로젝트 · 소상공인 문제 해결</p>
      <h1 style={styles.title}>신입 알바 온보딩 AI 매니저</h1>
      <p style={styles.subtitle}>
        "센스에 기대지 않고, 정해진 대응책으로 돌아가는 가게를 만든다."
      </p>
      <p style={styles.desc}>
        신입 알바의 첫 30일을 책임지는 AI 온보딩 매니저입니다. 사장은 체계적으로
        인수인계하고, 알바생은 눈치 안 보고 물어보며, 가게 운영의 암묵지를 '정해진
        지침'으로 전환합니다.
      </p>

      <div style={styles.cardRow}>
        {features.map((f) => (
          <div key={f.title} style={styles.card}>
            <h3 style={styles.cardTitle}>{f.title}</h3>
            <p style={styles.cardDesc}>{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    maxWidth: 760,
    margin: "0 auto",
    padding: "3rem 1.5rem",
    fontFamily: "system-ui, sans-serif",
    color: "#1a1a1a",
    textAlign: "center",
  },
  tag: {
    color: "#6b46c1",
    fontWeight: 600,
    fontSize: "0.9rem",
    marginBottom: "0.5rem",
  },
  title: { fontSize: "2.2rem", margin: "0.3rem 0" },
  subtitle: {
    fontSize: "1.1rem",
    fontStyle: "italic",
    color: "#444",
    margin: "0.5rem 0 1.2rem",
  },
  desc: { fontSize: "1rem", lineHeight: 1.7, color: "#333" },
  cardRow: {
    display: "flex",
    gap: "1rem",
    marginTop: "2rem",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  card: {
    flex: "1 1 200px",
    background: "#f7f5ff",
    borderRadius: 12,
    padding: "1.2rem",
    textAlign: "left",
  },
  cardTitle: { fontSize: "1rem", margin: "0 0 0.5rem", color: "#6b46c1" },
  cardDesc: { fontSize: "0.9rem", lineHeight: 1.6, color: "#444", margin: 0 },
};

export default ProjectIntro;