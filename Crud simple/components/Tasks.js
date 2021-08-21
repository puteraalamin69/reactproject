import Task from "./Task"
// const task = [
//     {
//         id: 1,
//         text: 'Doctor Appointment',
//         day: 'Feb 5th at 2:30pm',
//         reminder: true,
//     },
//     {
//         id: 2,
//         text: 'Lawyer',
//         day: 'Feb 4th at 2:30pm',
//         reminder: true,
//     },
//     {
//         id: 3,
//         text: 'Food Shopping',
//         day: 'Feb 30th at 2:30pm',
//         reminder: false,
//     },
// ]
// map to make list

const Tasks = ({ tasks, onDelete, onToggle }) => {

    return (
        <>
            {tasks.map((task) => (
                <Task key={task.id} task={task} 
                onDelete={onDelete}
                onToggle={onToggle}
                />
                // <h3 key={task.id}>{task.text}</h3>
            ))}
        </>
    )
}

export default Tasks
