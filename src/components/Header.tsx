type Props = {
  title?: string
}

const Header = (props: Props) => {
  return (
    <nav className="flex flex-row justify-between p-5 bg-mint-light ">
      <p className="title">{props.title}</p>
    </nav>
  )
}

export default Header;

// long press on header to swap header with input field for customised  title 
// dustbin in corner
// modal popup, no direct delete
 