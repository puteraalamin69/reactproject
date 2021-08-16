import React from 'react';

const Employee = (props) => {

    const { firstname, lastname : l } = props;

    console.log(props);
    
    return(
        <div>
            <h1> First Name : {firstname} </h1>
            <h1> Last Name : {l} </h1>
           
            {/* OR Another Format 
            
            <h1>{ First Name : ${props.firstname} } </h1>
            <h1>{ Last Name : ${props.lastname} } </h1>

            */}
        </div>
    ); 

};

export default Employee;


// OR 

// import React from 'react';

// const Employee = (props) => {

//     const { firstname, lastname } = props;

// console.log(props);
//     return(
//         <div>
//             <h1> First Name : {props.firstname} </h1>
//             <h1> Last Name : {props.lastname} </h1>
           
//             {/* OR Another Format 
            
//             <h1>{ First Name : ${props.firstname} } </h1>
//             <h1>{ Last Name : ${props.lastname} } </h1>

//             */}
//         </div>
//     ); 

// };

// export default Employee;
