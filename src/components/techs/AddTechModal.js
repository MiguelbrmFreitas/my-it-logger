import React, { useState } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addTech } from '../../actions/techActions';

export const AddTechModal = ({addTech}) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const clearFields = () => {
        setFirstName('');
        setLastName('');
    }

    const onSubmit = () => {
        if(firstName === '' || lastName ==='') {
            M.toast({
                html: 'Please enter your name'
            })
        } else {
            const tech = {
                firstName,
                lastName
            }

            addTech(tech);

            M.toast({
                html: `${firstName} ${lastName} is the new tech!` 
            })

            // Clear Fields
            clearFields();
        }
    }
    
    return (
        <div id='add-tech-modal' className="modal">
            <div className="modal-content">
                <h4>New Technician</h4>
                <div className="row">
                    <div className="input-field">
                        <input 
                            type='text'
                            name='firstName'
                            value={firstName} 
                            onChange= { e => setFirstName(e.target.value) }
                        />
                        <label htmlFor="firstName" className='active'>
                            First Name
                        </label>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field">
                        <input 
                            type='text'
                            name='lastName'
                            value={lastName} 
                            onChange= { e => setLastName(e.target.value) }
                        />
                        <label htmlFor="lastName" className='active'>
                            Last Name
                        </label>
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

const footerStyle = {
    position: 'absolute',
    bottom: '16px',
    right: '16px'
}

AddTechModal.propTypes = {
    addTech: PropTypes.func.isRequired,
}

export default connect(null, {addTech})(AddTechModal)