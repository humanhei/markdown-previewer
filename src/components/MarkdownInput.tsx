import tw from "tailwind-styled-components";

const InputContainer = tw.div`
  flex
  w-1/2
  p-4
  border
`;

const StyledTextArea = tw.textarea`
  w-full
`

interface MarkdownInputComponentProps {
  value: string;
  onChange: (value: string) => void;
}

function MarkdownInputComponent({ value, onChange } : MarkdownInputComponentProps) {
  return (
    <InputContainer>
        <label htmlFor="mdInput"></label>
        <StyledTextArea name="mdInput" value={value} onChange={e => onChange(e.target.value)} />
    </InputContainer>
  );
}

export default MarkdownInputComponent