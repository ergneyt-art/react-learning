import React from 'react';

class HorizontalBar extends React.Component {
    render() {
        const { title, value, total, color } = this.props;
        return (<div className="horizontal-bar" style={{ margin: '10px 0', padding: '5px 0' }}>
            <div className="horizontal-bar-title" style={{ fontWeight: 'bold', marginBottom: '5px' }}>
                {title}
            </div>
            <div className="horizontal-bar-container" style={{ height: '24px', backgroundColor: '#e0e0e0', borderRadius: '5px', overflow: 'hidden', position: 'relative' }}>
                <div className="horizontal-bar-value" style={{ width: `${(value / total) * 100}%`, backgroundColor: color || '#4caf50', height: '100%' }}></div>
                <div className="horizontal-bar-sign" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: '#fff', fontWeight: 'bold', pointerEvents: 'none' }}>
                    {value}/{total}
                </div>
            </div>
        </div>)
    }
}

export default HorizontalBar;