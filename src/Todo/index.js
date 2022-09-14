import { useReducer, useRef, useEffect } from 'react';
import reducer, { initState } from './reducer';
import { setJob, addJob, deleteJob, editJob, setSelected } from './actions'




function App() {
    const [state, dispatch] = useReducer(reducer, initState)
    const { job, jobs, selected } = state;
    const handleAdd = () => {
        dispatch(addJob(job));
        dispatch(setJob(''))
        inputRef.current.focus()
    }
    const handleSelected = (job, index) =>{
        dispatch(setJob(job))
        dispatch(setSelected(index))
        inputRef.current.focus()
        buttonRef.current.innerText = 'Update'
        }
    const handleEdit = (index) => {
        dispatch(editJob({
            index: selected,
            value: job
        }));
        dispatch(setJob(''));
        dispatch(setSelected(-1));
        inputRef.current.focus();
        buttonRef.current.innerText = 'Add'
    }

    const inputRef = useRef()
    const buttonRef = useRef()

    useEffect(()=>{
        const jsonJobs = JSON.stringify(jobs);
        localStorage.setItem('jobsList',jsonJobs)
    },[jobs])

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
            <button ref = {buttonRef} onClick={selected === -1 ? handleAdd : handleEdit}>Add</button>
            <ul>
                {jobs.map((job, index) =>
                    <li key={index} onClick = {() => handleSelected(job,index)}>
                        { job }
                        <button onClick={() => dispatch(deleteJob(index))} >Delete</button>
                    </li>
                )}
            </ul>
        </div>
    );
}

export default App;
