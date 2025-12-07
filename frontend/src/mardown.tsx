import MarkdownIt from "markdown-it"

const Markdown = (mdstring = "") => {
  const md = new MarkdownIt(),
    renderedHTML = md.render(mdstring);

  return (
    <div className="prose max-w-none" dangerouslySetInnerHTML={{__html: renderedHTML}} />
  );
}

export default Markdown;