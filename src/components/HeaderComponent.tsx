import tw from "tailwind-styled-components";

const Header = tw.header`
  flex
  w-full
  bg-gray-900
  text-white
  p-5
  justify-between
  place-items-center
`;

const HeaderTitle = tw.h2`
  text-xl
  font-bold
`;

const HeaderButton = tw.button`
  border
  rounded-md
  p-3
  hover:bg-sky-700
`

interface HeaderComponentProps {
  onToggle: () => void;
}

function HeaderComponent({onToggle} : HeaderComponentProps) {
    return (
      <Header>
          <HeaderTitle>Markdown Previewer</HeaderTitle>
          <HeaderButton onClick={onToggle}>Markdown Cheat Sheet</HeaderButton>
      </Header>
    );
}

export default HeaderComponent