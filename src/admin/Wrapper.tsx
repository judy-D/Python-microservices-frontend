import React, {PropsWithChildren} from 'react';
import Menu from "../components/Menu";
import Navbar from '../components/Navbar';

const Wrapper = (props : PropsWithChildren < any >) => {
    return (
        <div>
            {/* <Navbar/> */}
            <div className="container-fluid">
                <div className="row">

                    <Menu/>
                    <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
                        {props.children}
                    </main>
                </div>
            </div>
        </div>
    );
};

export default Wrapper;