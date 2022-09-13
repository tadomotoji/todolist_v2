import { useReducer, useRef } from 'react';
import reducer, { initState } from './reducer';
import { setJob, addJob, deleteJob } from './actions'

function App() {
    const [state, dispatch] = useReducer(reducer, initState)
    const { job, jobs } = state;

    const handleSubmit = () => {
        dispatch(addJob(job));
        dispatch(setJob(''))
        inputRef.current.focus()
    }


    const inputRef = useRef()

    return (
        <div className="App">
            <h3> Todo List</h3>
            <input
                ref={inputRef}
                value={job}
                placeholder="Enter todo ..."
                onChange={e => {
                    dispatch(setJob(e.target.value))
                }}
            />
            <button onClick={handleSubmit}>Add</button>
            <ul>
                {jobs.map((job, index) => (
                    <li key={index}>{job}
                        <button onClick={() => dispatch(deleteJob(index))} >Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
