import React from 'react';
import Card from './Card';
import web from './images/services.png';
import Sdata from './Sdata';

const Services =()=>{
    return(
        <div className="my-5">
        <h1 className="Services text-center">Our Services</h1>
        <div className="container-fluid mb-5">
        <div className="row ">
        <div className="col-10 mx-auto">
        <div className="row gy-4">
        


            {
                Sdata.map((val,ind)=>{
                    return <Card key={ind}
                        imgsrc={val.imgsrc}
                        title={val.title}
                    />

                })


            }      
            

        </div>
        </div>
        </div>
        </div>
        </div>






    );

};

export default Services;