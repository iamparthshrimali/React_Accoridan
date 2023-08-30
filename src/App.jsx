
import { useState } from "react";
import "./styles.css";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus."
  },
  {
    title: "How long do I have to return my chair?",
    text:
      "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus."
  },
  {
    title: "Do you ship to countries outside the EU?",
    text:
      "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!"
  }
];

export default function App() {
  return <>
    <Accordion data={faqs} />
  </>
}


function Accordion({ data }) {
  const [currOpen, setCurrOpen] = useState(null);
  return <div className="accordion">
    {data.map((faq, index) => <AccordionItem num={index} title={faq.title} text={faq.text} currOpen={currOpen} onOpen={setCurrOpen} key={faq.title} />)}
  </div>
}

function AccordionItem({ num, title, text, currOpen, onOpen }) {

  const isOpen = num === currOpen;
  const handleToggle = () => {
    // onOpen(num => num === currOpen ? null : num)
    onOpen(currOpen => currOpen === num ? null :num)
  }
  return <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
    <p className="number">{num < 9 ? `0${num + 1} ` : num + 1}</p>
    <p className="text">{title}</p>
    <p className="icon">{isOpen ? "-" : "+"}</p>
    {isOpen && <div className="content-box">{text}</div>}
  </div>
}
