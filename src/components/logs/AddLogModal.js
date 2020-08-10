import React, { useState } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addLog } from '../../actions/logActions';
import TechSelectOptions from '../techs/TechSelectOptions';

export const AddLogModal = ({ addLog }) => {
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
            // create log object
            const log = {
                message,
                attention,
                tech,
                date: new Date()
              };
        
              addLog(log);
        
              M.toast({ html: `Log added by ${tech}` });

            // Clear Fields
            clearFields();
        }
    }
    
    return (
        <div id='add-log-modal' className="modal" style={modalStyle}>
            <div className="modal-content">
                <h4>Add System Log</h4>
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
                            <TechSelectOptions />
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

AddLogModal.propTypes = {
    addLog: PropTypes.func.isRequired,
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

export default connect(null,{addLog})(AddLogModal);