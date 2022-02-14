import React from 'react'; 
import StickyHeader from "./Header"; 
import HomeContent from './Feed';

export default function Home() {
    return (
        <div>
            <StickyHeader />
            <HomeContent />
        </div>
    )
};