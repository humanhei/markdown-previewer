import tw from "tailwind-styled-components";

const GuideContainer = tw.div`
  w-50
  p-4
  bg-gray-500
  text-white
`;

const MarkdownGuideHeader = tw.h3`
  text-lg
  font-bold
`;

const MarkdownGuideList = tw.ul`
  list-disc
  p-6
  bg-gray-700
`;

function MarkdownGuideComponent() {
  return (
    <GuideContainer >
      <div>
        <MarkdownGuideHeader>Markdown Cheat Sheet</MarkdownGuideHeader>
        <MarkdownGuideList>
          <li><code># H1</code></li>
          <li><code>## H2</code></li>
          <li><code>### H3</code></li>
          <li><code>**bold**</code></li>
          <li><code>*italic*</code></li>
          <li><code>[Link](http://a.com)</code></li>
          <li><code>![Image](http://url/a.png)</code></li>
          <li><code>`inline code`</code></li>
          <li><code>```block code```</code></li>
          <li><code>- list item</code></li>
        </MarkdownGuideList>
      </div>
    </GuideContainer >
  );
}

export default MarkdownGuideComponent