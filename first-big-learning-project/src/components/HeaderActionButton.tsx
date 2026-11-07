interface Props {
    title: string;
    onClick: () => void
}

const HeaderActionButton = ({title = 'Button', onClick}: Props) => {
    return (
        <button type="button" className="btn header-action-button" onClick={onClick}>{title}</button>
    )
}

export default HeaderActionButton;