import React from 'react';

interface Props {
    title: string;
    values: {value: string, label: string}[];
    onChangeSelectValue: (value: string) => void;
}

const HeaderSelecter = (props: Props) => {
    return (
        <select className="header-selecter" aria-label={props.title} onChange={changeValue}>
            {props.values.map((el) => (<option key={el.value} value={el.value}>{el.label}</option>))}
        </select>
    )

    function changeValue(event: React.ChangeEvent<HTMLSelectElement>) {
        props.onChangeSelectValue(event.target.value);
    }
}

export default HeaderSelecter;