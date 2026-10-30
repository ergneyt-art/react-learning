interface Props {
    header: string,
    children: string
}


const Header = ({header, children} : Props) => {
    return <div>
        <h2>{header}</h2>
        <p>{children}</p>
    </div>
}

export default Header;