import { AccordionArrow } from "./Icons";

const AccordionItem = ({ question, answer }) => (
  <details className="py-6 border-b border-gray-700 group">
    <summary className="flex items-center justify-between font-sans text-lg cursor-pointer list-none text-ink">
      {question}
      <span className="transition-transform duration-300 group-open:rotate-180">
        <AccordionArrow />
      </span>
    </summary>
    <dd className="mt-4 text-lg text-muted">
      {answer}
    </dd>
  </details>
);

const FAQ = ({ faqData }) => (
  <div className="py-24 bg-primary">
    <div className="max-w-3xl px-6 mx-auto space-y-12">
      <h2 className="font-serif text-4xl text-center text-white sm:text-5xl">Frequently asked questions</h2>
      <dl>
        {faqData.map((item, index) => (
          <AccordionItem key={index} question={item.question} answer={item.answer} />
        ))}
      </dl>
    </div>
  </div>
);

export default FAQ;