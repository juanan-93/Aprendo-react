import React, { useState} from 'react';
import './Table.module.css';

export default function Table() {

    return (
        <div className='table'>  

            <table>
                <thead>
                    <tr>
                    <th>Nombre</th>
                    <th>Apellidos</th>
                    <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>John</td>
                    <td>Doe</td>
                    <td>johndoe@example.com</td>
                    </tr>
                    <tr>
                    <td>Jane</td>
                    <td>Doe</td>
                    <td>janedoe@example.com</td>
                    </tr>
                </tbody>
            </table>
            
        </div>
            
    );

}

