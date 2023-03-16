import React, { useState} from 'react';
import './Form.module.css';

export default function Form() {

    return (
        <div className='form'> 

           <form>
                <label>Nombre</label>
                <input type="text" name="name" placeholder='name' />
                <label>Apellido</label>
                <input type="text" name="lastname" placeholder='Lastname' />
                <label>Email</label>
                <input type="text" name="email" placeholder='Email' />

                <button>SEND</button>

            </form>

        </div>
            
    );

}

