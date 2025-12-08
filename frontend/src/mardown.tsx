import ReactMarkdown from "react-markdown";


const Markdown = (mdstring = "") => {
  return (
    <div>
        <ReactMarkdown>{mdstring}</ReactMarkdown>
    </div>
  );
}

export default Markdown;