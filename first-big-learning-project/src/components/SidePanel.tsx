import "../css/side-panel.css";

interface Props {
  header: string;
  items: { key: string; title: string }[];
  itemClickHandler?: (key: string) => void;
}

const SidePanel = ({ header, items, itemClickHandler }: Props) => {
  return (
    <aside className="side-panel-container">
      <h3>{header}</h3>
      <ul className="panel-list-items-container">
        {items.map((el) => (
          <li
            className="panel-list-item"
            key={el.key}
            onClick={() => itemClickHandler?.(el.key)}
          >
            {el.title}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default SidePanel;
