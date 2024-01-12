import React, { useState } from 'react';

// 탭 이름을 나타내는 타입을 정의합니다.
type TabName = 'tab1' | 'tab2' | 'tab3';

const Header: React.FC = () => {
    // 상태의 타입을 `TabName`으로 지정합니다.
    const [activeTab, setActiveTab] = useState<TabName>('tab1');

    // 탭을 변경하는 함수의 매개변수 타입을 `TabName`으로 지정합니다.
    const selectTab = (tab: TabName) => {
        setActiveTab(tab);
    };

    return (
        <div className="header">
            <div className={activeTab === 'tab1' ? 'tab active' : 'tab'} onClick={() => selectTab('tab1')}>
                탭 1
            </div>
            <div className={activeTab === 'tab2' ? 'tab active' : 'tab'} onClick={() => selectTab('tab2')}>
                탭 2
            </div>
            <div className={activeTab === 'tab3' ? 'tab active' : 'tab'} onClick={() => selectTab('tab3')}>
                탭 3
            </div>
        </div>
    );
};

export default Header;
