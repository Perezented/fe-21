import React, { useEffect } from 'react';

// imports of all the components
import Header from '../Header/Header';
import TopStrains from './TopStrains';
import SavedStrains from './SavedStrains';
import SleepyStrains from './SleepyStrains';

import { getStrainsDataFromActions } from '../../store/actions/index';
import PainKillerStrains from './PainKillerStrains';

// Renders the link to '/home'
const HomePage = (props) => {
    return (
        <div>
            {/* Header */}
            <Header />
            {/* What will be the app tiles that carousel */}
            <TopStrains strainsList={props} />
            <SavedStrains />
            <SleepyStrains strainsList={props} />
            <PainKillerStrains strainsList={props} />
        </div>
    );
};

//  MAP STATE TO PROPS DID NOT WORK BUT I LEFT IT IN TO DISPLAY THAT THE SERVER INFO WAS RETREIVED AND SET TO STATE IN A STORE LIKE MANNER

export default HomePage;
