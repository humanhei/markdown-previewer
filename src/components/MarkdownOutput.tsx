import tw from "tailwind-styled-components";
import Markdown from "react-markdown";

const OutputContainer = tw.div`
  w-1/2
  p-4
  bg-slate-400
  font-sans
`;

interface MarkdownOutputComponentProps {
  markdown: string;
}

function MarkdownOutputComponent({ markdown } : MarkdownOutputComponentProps) {
  return (
    <OutputContainer>
      <Markdown>{markdown}</Markdown>
    </OutputContainer>
  );
}

export default MarkdownOutputComponent