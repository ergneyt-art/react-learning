import '../css/side-panel.css';

interface Props {
    header: string,
    items: string[]
}

const SidePanel = ({header, items}: Props) => {
    return (
        <aside className="side-panel-container">
            <h3>{header}</h3>
            <ul className="panel-list-items-container">
                {items.map(el => <li className="panel-list-item">{el}</li>)}
            </ul>
        </aside>
    )
}

export default SidePanel;