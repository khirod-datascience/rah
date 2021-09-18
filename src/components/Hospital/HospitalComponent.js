import React, { Component } from 'react';

// Sub components!
import Nav from '../sub-components/tempNav';
import DetailsComponent from './sub-components/DetailsComponent';
import DepartmentsComponent from './sub-components/DepartmentsComponent';
import AdComponent from '../sub-components/AdComponent';
import FooterComponent from '../sub-components/FooterComponent';
import DoctorComponent from './sub-components/DoctorComponent';
import VAS from './sub-components/VAS';
import Procedures from './sub-components/Procedures';
import FacilitiesComponent from './sub-components/FacilitiesComponent';

class HospitalComponent extends Component{
    render() {
        return(
            <>
                <Nav/>
                <DetailsComponent/>
                <FacilitiesComponent/>
                <DepartmentsComponent/>
                <DoctorComponent/>
                <Procedures/>
                <VAS/>
                <AdComponent/>
                <FooterComponent/>
            </>
        );
    }
}

export default HospitalComponent;