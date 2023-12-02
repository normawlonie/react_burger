interface IProps {
  isOpen?: boolean;
}

const Toggle = styled.button`
  transition: none;
  display: inline-flex;
  flex-direction: column;
  justify-content: space-around;
  height: 21px;
  width: 50px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0 16px;
  margin: 28px 0;
  z-index: 10;
  overflow: hidden;

  &:focus {
    outline: none;
  }

  div {
    border-radius: 10px;
    transition: width 200ms ease-out, height 0.3s linear, transform 0.3s linear, opacity 300ms linear;
    position: relative;
    transform-origin: 1px;
    min-height: 7px;

    span {
      background: #ffffff;
      height: 3px;
      display: block;
      margin: 2px 0;
      border-radius: 5px;
    }

    :first-child {
      transform: ${({ isOpen }) => isOpen ? 'rotate(45deg)' : 'rotate(0)'};
      width: ${({ isOpen }:IProps) => isOpen ? '22px' : '20px'};
    }

    :nth-child(2) {
      width: ${({ isOpen }:IProps) => isOpen ? '0' : '20px'};
    }

    :nth-child(3) {
      transform: ${({ isOpen }:IProps) => isOpen ? 'rotate(-45deg)' : 'rotate(0)'};
      width: ${({ isOpen }:IProps) => isOpen ? '22px' : '20px'};
    }
  }
`

const BurgerToggle = ({ isToggled, toggleSideNav }) => {
  
  return (
    <Toggle isOpen={isToggled} onClick={toggleSideNav}>
      <div><span></span></div>
      <div><span></span></div>
      <div><span></span></div>
    </Toggle>
  );
};

const App = () => {
  const [isToggled, setToggle] = React.useState(false);
  const toggleSideNav = () => {
    setToggle(!isToggled);
  }
  
  return (
     <BurgerToggle isToggled={isToggled} toggleSideNav={toggleSideNav} />
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
