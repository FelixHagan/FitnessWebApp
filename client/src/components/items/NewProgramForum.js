import React, { useState, useContext, useEffect } from 'react';
import CreateProgramContext from '../../context/createProgram/createProgramContext';
import AuthContext from '../../context/auth/authContext';
import PropTypes from 'prop-types';

const NewProgramForum = ({ cancelForm }) => {
    const createProgramContext = useContext(CreateProgramContext);
    const authContext = useContext(AuthContext);

    // destructure 
    const { addNewProgram, current, clearCurrent, updateProgram } = createProgramContext;
    const { user } = authContext;

    // runs if createProgramContext or current changes
    useEffect(() => {
        if (current !== null) {
            setNewProgram(current);
        } else {
            setNewProgram({
                user: user._id,
                programName: "",
                mondayName: "",
                mondayDescription: "",
                tuesdayName: "",
                tuesdayDescription: "",
                wednesdayName: "",
                wednesdayDescription: "",
                thursdayName: "",
                thursdayDescription: "",
                fridayName: "",
                fridayDescription: "",
                saturdayName: "",
                saturdayDescription: "",
                sundayName: "",
                sundayDescription: ""
            })
        }
    }, [createProgramContext, current])

    // state to store new program
    const [newProgram, setNewProgram] = useState({
        user: user.id,
        programName: "",
            mondayName: "",
            mondayDescription: "",
            tuesdayName: "",
            tuesdayDescription: "",
            wednesdayName: "",
            wednesdayDescription: "",
            thursdayName: "",
            thursdayDescription: "",
            fridayName: "",
            fridayDescription: "",
            saturdayName: "",
            saturdayDescription: "",
            sundayName: "",
            sundayDescription: ""
    })

    // destructure newProgram
    const { mondayName, mondayDescription, tuesdayName, tuesdayDescription, wednesdayName, wednesdayDescription,
        thursdayName, thursdayDescription, fridayName, fridayDescription, saturdayName, saturdayDescription, 
        sundayName, sundayDescription, programName} = newProgram;

    const onChange = e => setNewProgram({ ...newProgram, [e.target.name]: e.target.value });

    // runs when form is submitted 
    // checks if a new program is being added or a program is being updated and then runs the 
    // apropriate method 
    const onSubmit = e => {
        e.preventDefault();
        if (current === null) {
            addNewProgram(newProgram);
        } else {
            updateProgram(newProgram);
        }
        // set back to default values 
        setNewProgram({
            user: user._id,
            programName: "",
            mondayName: "",
            mondayDescription: "",
            tuesdayName: "",
            tuesdayDescription: "",
            wednesdayName: "",
            wednesdayDescription: "",
            thursdayName: "",
            thursdayDescription: "",
            fridayName: "",
            fridayDescription: "",
            saturdayName: "",
            saturdayDescription: "",
            sundayName: "",
            sundayDescription: ""
        })
        clearCurrent();
        cancelForm();
    }

    return (
        <div className="formcontainer">
            <form onSubmit={onSubmit}>
                <h2>{current ? "Update Program" : "Create Program"}</h2>

                <div className="labelinputcontainer">
                <label htmlFor='programname'>Name of the program:</label>
                <input 
                    type='text'
                    placeholder='Title of the program'
                    name='programName'
                    id='programname'
                    value={programName}
                    onChange={onChange}
                    required
                    />
                </div> 
                
                <div className="labelinputcontainer">
                <label htmlFor='mondayname'>Monday workout name:</label>
                <input 
                    type='text'
                    placeholder='Monday workout name'
                    name='mondayName'
                    id='mondayname'
                    value={mondayName}
                    onChange={onChange}
                    required
                    />
                </div> 

                <div className="labelinputcontainer">
                <label htmlFor='mondaydescription'>Monday workout description:</label>
                <input 
                    type='text'
                    placeholder='Monday workout description'
                    name='mondayDescription'
                    id='mondaydescription'
                    value={mondayDescription}
                    onChange={onChange}
                    required
                    />
                </div> 

                <div className="labelinputcontainer">
                <label htmlFor='tuesdayname'>Tuesday workout name:</label>
                <input 
                    type='text'
                    placeholder='Tuesday workout name'
                    name='tuesdayName'
                    id='tuesdayname'
                    value={tuesdayName}
                    onChange={onChange}
                    required
                    />
                </div> 

                <div className="labelinputcontainer">
                <label htmlFor='tuesdaydescription'>Tuesday workout description:</label>
                <input 
                    type='text'
                    placeholder='Tuesday workout description'
                    name='tuesdayDescription'
                    id='tuesdaydescription'
                    value={tuesdayDescription}
                    onChange={onChange}
                    required
                    />
                </div> 

                <div className="labelinputcontainer">
                <label htmlFor='wednesdayname'>Wednesday workout name:</label>
                <input 
                    type='text'
                    placeholder='Wednesday workout name'
                    name='wednesdayName'
                    id='wednesdayname'
                    value={wednesdayName}
                    onChange={onChange}
                    required
                    />
                </div> 

                <div className="labelinputcontainer">
                <label htmlFor='wednesdaydescription'>Wednesday workout description:</label>
                <input 
                    type='text'
                    placeholder='Wednesday workout description'
                    name='wednesdayDescription'
                    id='wednesdaydescription'
                    value={wednesdayDescription}
                    onChange={onChange}
                    required
                    />
                </div> 

                <div className="labelinputcontainer">
                <label htmlFor='thursdayname'>Thursday workout name:</label>
                <input 
                    type='text'
                    placeholder='Thursday workout name'
                    name='thursdayName'
                    id='thursdayname'
                    value={thursdayName}
                    onChange={onChange}
                    required
                    />
                </div> 

                <div className="labelinputcontainer">
                <label htmlFor='thursdaydescription'>Thursday workout description:</label>
                <input 
                    type='text'
                    placeholder='Thursday workout description'
                    name='thursdayDescription'
                    id='thursdaydescription'
                    value={thursdayDescription}
                    onChange={onChange}
                    required
                    />
                </div> 

                <div className="labelinputcontainer">
                <label htmlFor='fridayname'>Friday workout name:</label>
                <input 
                    type='text'
                    placeholder='Friday workout name'
                    name='fridayName'
                    id='fridayname'
                    value={fridayName}
                    onChange={onChange}
                    required
                    />
                </div> 

                <div className="labelinputcontainer">
                <label htmlFor='fridaydescription'>Friday workout description:</label>
                <input 
                    type='text'
                    placeholder='Friday workout description'
                    name='fridayDescription'
                    id='fridaydescription'
                    value={fridayDescription}
                    onChange={onChange}
                    required
                    />
                </div> 

                <div className="labelinputcontainer">
                <label htmlFor='saturdayname'>Saturday workout name:</label>
                <input 
                    type='text'
                    placeholder='Saturday workout name'
                    name='saturdayName'
                    id='saturdayname'
                    value={saturdayName}
                    onChange={onChange}
                    required
                    />
                </div> 

                <div className="labelinputcontainer">
                <label htmlFor='saturdaydescription'>Saturday workout description:</label>
                <input 
                    type='text'
                    placeholder='Saturday workout description'
                    name='saturdayDescription'
                    id='saturdaydescription'
                    value={saturdayDescription}
                    onChange={onChange}
                    required
                    />
                </div> 

                <div className="labelinputcontainer">
                <label htmlFor='sundayname'>Sunday workout name:</label>
                <input 
                    type='text'
                    placeholder='Sunday workout name'
                    name='sundayName'
                    id='sundayname'
                    value={sundayName}
                    onChange={onChange}
                    required
                    />
                </div> 

                <div className="labelinputcontainer">
                <label htmlFor='sundaydescription'>Sunday workout description:</label>
                <input 
                    type='text'
                    placeholder='Sunday workout description'
                    name='sundayDescription'
                    id='sundaydescription'
                    value={sundayDescription}
                    onChange={onChange}
                    required
                    />
                </div> 
                <input type="submit" value={current ? "Update Program" : "Create Program"} className="buttoncolour button"/>

            </form>
        </div>
    )
}

NewProgramForum.propTypes = {
    cancelForm: PropTypes.func
  }
  

export default NewProgramForum;
