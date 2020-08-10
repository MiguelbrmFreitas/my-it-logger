import React, { useState } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';

export const EditLogModal = () => {
    const [message, setMessage] = useState('');
    const [attention, setAttention] = useState(false);
    const [tech, setTech] = useState('');

    const clearFields = () => {
        setMessage('');
        setTech('');
        setAttention(false);
    }
    
    const onSubmit = () => {
        if(message === '' || tech ==='') {
            M.toast({
                html: 'Please enter message log and tech'
            })
        } else {
            console.log(message, tech, attention)
            // Clear Fields
            clearFields();
        }
    }
    
    return (
        <div id='edit-log-modal' className="modal" style={modalStyle}>
            <div className="modal-content">
                <h4>Edit System Log</h4>
                <div className="row">
                    <div className="input-field">
                        <input 
                            type='text'
                            name='message'
                            value={message} 
                            onChange= { e => setMessage(e.target.value) }
                        />
                        <label htmlFor="message" className='active'>
                            Log Message
                        </label>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field">
                        <select name="tech" value={tech} className='browser-default' 
                            onChange={ e => setTech(e.target.value) }
                        >
                            <option value="" disabled>
                                Select Tech Guy
                            </option>
                            <option value="Steve Jobs">Steve Jobs</option>
                            <option value="Miguel Freitas">Miguel Freitas</option>
                            <option value="Elon Musk">Elon Musk</option>
                        </select>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field">
                        <p>
                            <label>
                                <input 
                                    type="checkbox"
                                    className="filled-in"
                                    checked={attention}
                                    value={attention}
                                    onChange={ e => setAttention(!attention)}    
                                />
                                <span>Urgent</span>
                            </label>
                        </p>
                    </div>
                </div>
            </div>
            <div  style={footerStyle}>
                <a href="#!" onClick={onSubmit} className="modal-close waves-effect blue btn">
                    Enter
                </a>
            </div>
        </div>
    )
}

const modalStyle = {
    width: '75%',
    height: '50%'
}

const footerStyle = {
    position: 'absolute',
    bottom: '16px',
    right: '16px'
}

export default EditLogModal