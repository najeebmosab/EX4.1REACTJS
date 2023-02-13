import React from 'react';

const Box1 = () => {
    return (
        <div style={{ backgroundColor: 'green', width: '100%', height: '100vh',textAlign:'center',display:'flex',alignItems:'center',justifyContent:'center' }}>
            <Box2 />
        </div>
    );
};

const Box2 = () => {
    return (
        <div style={{ backgroundColor: 'blue', width: '95%', height: '90%', margin: 'auto auto',textAlign:'center',display:'flex',alignItems:'center',justifyContent:'center' }}>
            <Box3 />
        </div>
    );
};

const Box3 = () => {
    return (
        <div style={{ backgroundColor: 'pink', width: '80%', height: '80%', margin: 'auto auto',textAlign:'center',display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column'}}>
            <Box4 />
            <Box4 />
        </div>
    );
};

const Box4 = () => {
    return (
        <div style={{ backgroundColor: 'purple', width: '50%', height: '25%', margin: '25px'}} />
    );
};


export default Box1