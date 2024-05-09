// export default function Todo({ task }) {

//     return (
//         <li>Task: {task}</li>
//     )
// }

// export default function Todo({ task, isDone }) {
//     if (isDone === true) {
//         return (
//             <li>Task finished: {task}</li>
//         )
//     }
//     else {
//         return (
//             <li>Work on: {task}</li>
//         )
//     }

// }

export default function Todo({ task, isDone }) {

    return (
        <li>{isDone ? 'Finished' : 'Work on'}: {task}</li>
        // <li>{task} {isDone || ': Work on'} </li>
    )


}