import { useState } from 'react'
import tw from 'tailwind-styled-components'
import HeaderComponent from './HeaderComponent'
import MarkdownGuideComponent from './MarkdownGuide';
import MarkdownInputComponent from './MarkdownInput';
import MarkdownOutputComponent from './MarkdownOutput';

const MarkdownComponent = tw.div`
  flex
  h-[calc(100vh-90px)]
`;

function App() {
  const [markdown, setMarkdown] = useState(`# Hello World`);
  const [showGuide, setShowGuide] = useState(false);

  function onToggleGuide() {
    showGuide ? setShowGuide(false) : setShowGuide(true);
  }

  function handleChange(value: string) {
    setMarkdown(value)
  }

  return (
    <>
      <HeaderComponent onToggle={onToggleGuide}/>
      { showGuide ? <MarkdownGuideComponent /> : <></> }
      <MarkdownComponent>
        <MarkdownInputComponent value={markdown} onChange={handleChange} />
        <MarkdownOutputComponent markdown={markdown} />
      </MarkdownComponent>
    </>
  )
}

export default App 
