import React from 'react';
import {Table} from 'react-bootstrap';

function Profile(props) {

    // console.log("data :", props.data[1].image);

  return (
    <>
        <div style={{width: '100%', height: 50}} className="bg-white mb-4">
            <h4 style={{textAlign: 'center'}} className='p-2'>Profile of {props.data[2].Name}</h4>
        </div>
        <div style={{textAlign: 'center'}}>
            <img src={props.data[1].image} style={{height: 200, width: 200,}} alt='image'></img>
        </div>
        <Table hover className='mt-4'>
        {/* <thead>
            <tr>
            <th colSpan={2}>Profile of {props.data[2].Name}</th>
            </tr>
        </thead> */}
        <tbody>
            {props.data.map((item, index) =>  {
                if(index==1){
                    return;
                }
                else{
                return(
                    <tr>
                        <td>{Object.keys(item)}</td>
                        <td>{Object.values(item)}</td>
                    </tr>
                )}
            })}
            {/* <tr>
            <td>1</td>
            <td>Mark</td>
            </tr>
            <tr>
            <td>2</td>
            <td>Mark</td>
            </tr>
            <tr>
            <td colSpan={2}>3</td>
            </tr>
            <tr>
            <td>4</td>
            <td>Mark</td>
            </tr> */}
        </tbody>
        </Table>
    </>
  )
}

export default Profile;