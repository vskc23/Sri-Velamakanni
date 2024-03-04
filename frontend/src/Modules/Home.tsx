import React from "react";
import LeftSection from "./LeftSection";
import {RightSection} from "./RightSection";


export const Home = () => {
    return (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', backgroundColor: '#070F2B', height: '100vh' }}>
                <LeftSection />
                <RightSection />

        </div>
    );
}