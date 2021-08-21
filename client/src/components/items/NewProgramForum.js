import React, { useState, useContext } from 'react';
import CreateProgramContext from '../../context/createProgram/createProgramContext';


const NewProgramForum = () => {
    const createProgramContext = useContext(CreateProgramContext);

    const [newProgram, setNewProgram] = useState({
        monday: {
            name: "",
            description: ""
        },
        tuesday: {
            name: "",
            description: ""
        },
        wednesday: {
            name: "",
            description: ""
        },
        thursday: {
            name: "",
            description: ""
        },
        friday: {
            name: "",
            description: ""
        },
        saturday: {
            name: "",
            description: ""
        },
        sunday: {
            name: "",
            description: ""
        },
        id: Math.floor(Math.random() * 10000) +1
    })

    const { monday, tuesday, wednesday, thursday, friday, saturday, sunday} = newProgram;

    const onChange = e => setNewProgram({ ...newProgram, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        createProgramContext.addNewProgram(newProgram);
        setNewProgram({
            monday: {
                name: "",
                description: ""
            },
            tuesday: {
                name: "",
                description: ""
            },
            wednesday: {
                name: "",
                description: ""
            },
            thursday: {
                name: "",
                description: ""
            },
            friday: {
                name: "",
                description: ""
            },
            saturday: {
                name: "",
                description: ""
            },
            sunday: {
                name: "",
                description: ""
            },
            id: Math.floor(Math.random() * 10000) +1
        })
    }

    return (
        <div className="formcontainer">
            <form onSubmit={onSubmit}>
                <h2>Create Program</h2>
                
                <div className="labelinputcontainer">
                <label htmlFor='mondayname'>Monday workout name:</label>
                <input 
                    type='text'
                    placeholder='Monday workout name'
                    name='name'
                    id='mondayname'
                    value={monday.name}
                    onChange={onChange}
                    />
                </div> 

                <div className="labelinputcontainer">
                <label htmlFor='mondaydescription'>Monday workout description:</label>
                <input 
                    type='text'
                    placeholder='Monday workout description'
                    name='monday.description'
                    id='mondaydescription'
                    value={monday.description}
                    onChange={onChange}
                    />
                </div> 

                <div className="labelinputcontainer">
                <label htmlFor='tuesdayname'>Tuesday workout name:</label>
                <input 
                    type='text'
                    placeholder='Tuesday workout name'
                    name='tuesday.name'
                    id='tuesdayname'
                    value={tuesday.name}
                    onChange={onChange}
                    />
                </div> 

                <div className="labelinputcontainer">
                <label htmlFor='tuesdaydescription'>Tuesday workout description:</label>
                <input 
                    type='text'
                    placeholder='Tuesday workout description'
                    name='tuesday.description'
                    id='tuesdaydescription'
                    value={tuesday.description}
                    onChange={onChange}
                    />
                </div> 

                <div className="labelinputcontainer">
                <label htmlFor='wednesdayname'>Wednesday workout name:</label>
                <input 
                    type='text'
                    placeholder='Wednesday workout name'
                    name='wednesday.name'
                    id='wednesdayname'
                    value={wednesday.name}
                    onChange={onChange}
                    />
                </div> 

                <div className="labelinputcontainer">
                <label htmlFor='wednesdaydescription'>Wednesday workout description:</label>
                <input 
                    type='text'
                    placeholder='Wednesday workout description'
                    name='wednesday.description'
                    id='wednesdaydescription'
                    value={wednesday.description}
                    onChange={onChange}
                    />
                </div> 

                <div className="labelinputcontainer">
                <label htmlFor='thursdayname'>Thursday workout name:</label>
                <input 
                    type='text'
                    placeholder='Thursday workout name'
                    name='thursday.name'
                    id='thursdayname'
                    value={thursday.name}
                    onChange={onChange}
                    />
                </div> 

                <div className="labelinputcontainer">
                <label htmlFor='thursdaydescription'>Thursday workout description:</label>
                <input 
                    type='text'
                    placeholder='Thursday workout description'
                    name='thursday.description'
                    id='thursdaydescription'
                    value={thursday.description}
                    onChange={onChange}
                    />
                </div> 

                <div className="labelinputcontainer">
                <label htmlFor='fridayname'>Friday workout name:</label>
                <input 
                    type='text'
                    placeholder='Friday workout name'
                    name='friday.name'
                    id='fridayname'
                    value={friday.name}
                    onChange={onChange}
                    />
                </div> 

                <div className="labelinputcontainer">
                <label htmlFor='fridaydescription'>Friday workout description:</label>
                <input 
                    type='text'
                    placeholder='Friday workout description'
                    name='friday.description'
                    id='fridaydescription'
                    value={friday.description}
                    onChange={onChange}
                    />
                </div> 

                <div className="labelinputcontainer">
                <label htmlFor='saturdayname'>Saturday workout name:</label>
                <input 
                    type='text'
                    placeholder='Saturday workout name'
                    name='saturday.name'
                    id='saturdayname'
                    value={saturday.name}
                    onChange={onChange}
                    />
                </div> 

                <div className="labelinputcontainer">
                <label htmlFor='saturdaydescription'>Saturday workout description:</label>
                <input 
                    type='text'
                    placeholder='Saturday workout description'
                    name='saturday.description'
                    id='saturdaydescription'
                    value={saturday.description}
                    onChange={onChange}
                    />
                </div> 

                <div className="labelinputcontainer">
                <label htmlFor='sundayname'>Sunday workout name:</label>
                <input 
                    type='text'
                    placeholder='Sunday workout name'
                    name='sunday.name'
                    id='sundayname'
                    value={sunday.name}
                    onChange={onChange}
                    />
                </div> 

                <div className="labelinputcontainer">
                <label htmlFor='sundaydescription'>Sunday workout description:</label>
                <input 
                    type='text'
                    placeholder='Sunday workout description'
                    name='sunday.description'
                    id='sundaydescription'
                    value={sunday.description}
                    onChange={onChange}
                    />
                </div> 
                <input type="submit" value="Add program" className="buttoncolour"/>
            </form>
        </div>
    )
}

export default NewProgramForum;
