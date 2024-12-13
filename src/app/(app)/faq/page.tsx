export default function Page() {
  return (
    <div>
      <h1 className="text-2xl leading-snug md:leading-tight">FAQs</h1>
      <section className="mt-6">
        {faqs.map((faq, index) => (
          <div key={index} className="mb-6">
            <h2 className="text-xl mb-4">{faq.question}</h2>
            <p className="leading-relaxed">{faq.answer}</p>
          </div>
        ))}
      </section>
    </div>
  );
}

const faqs: { question: string; answer: string }[] = [
  {
    question: "Are you working on a new project?",
    answer: "I start a new project every week, but I never finish them.",
  },
  {
    question: "But why?",
    answer: "I have a problem with commitment",
  },
  {
    question: "What you do for a living?",
    answer:
      "I am a university student, but to pay my VPS bills, I work as a freelance developer.",
  },
  {
    question: "But why to use a VPS?",
    answer:
      "To self-host every single shit I consume, plus it makes you cool for no reason",
  },
  {
    question: "What about your dev environment???",
    answer:
      "long story, I was one of the 🏳️‍🌈 arch guy but lately I moved to OSX",
  },
  {
    question: "And about your favorite programming language?",
    answer: "No doubt, TypeScript.",
  },
];
