import React from 'react';
import {Table} from 'react-bootstrap';

function Profile(props) {

    console.log("data :", props.data[0].image);

  return (
    <>
        <div>
            <img src='C:\Users\Admin\Desktop\React2\dhma\src\Mukesh_Sachdeva.jpg' alt='image'></img>
        </div>
        <Table hover >
        <thead>
            <tr>
            <th colSpan={2}>Profile of {props.data[1].Name}</th>
            </tr>
        </thead>
        <tbody>
            {props.data.map((item) =>  {
                return(
                    <tr>
                        <td>{Object.keys(item)}</td>
                        <td>{Object.values(item)}</td>
                    </tr>
                )
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