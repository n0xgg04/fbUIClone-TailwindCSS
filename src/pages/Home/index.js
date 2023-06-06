import React from 'react';
import '../../styles/tailwind.scss'

import NavigationBar from '../../components/NavigationBar';
import Content from '../../components/Content';
import LeftBar from '../../components/LeftBar';
import Main from '../../components/Main';
import RightBar from '../../components/RightBar';

export default function Home(){
    return(
        <section className="w-full h-full overflow-hidden">
            <NavigationBar/>
            <Content>
                <LeftBar/>
                <Main/>
                <RightBar/>
            </Content>
        </section>
    )
}