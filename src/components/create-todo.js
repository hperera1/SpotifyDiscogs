import { useState } from 'react'

function CreateTodo(props) {
    const [description, setDescription] = useState('');
    const [responsible, setResponsible] = useState('');
    const [priority, setPriority] = useState('');
    const [completed, setCompleted] = useState(false);

    function onSubmit(event) {
        event.preventDefault(); // if the event does not get explicitly handled, its default action should not be taken
        console.log("submitted");
        console.log(description);
        console.log(responsible);
        console.log(priority);
        setDescription('');
        setResponsible('');
        setPriority('');
        setCompleted(false);
    }

    function onChangeDescription(event) {
        setDescription(event.target.value);
    }
    
    function onChangeResponsible(event) {
        setResponsible(event.target.value);
    }

    function onChangePriority(event) {
        setPriority(event.target.value)
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <div className='py-2'>
                    <label htmlFor='description' className='nlock test-sm font-medium text-gray-700'>
                        Description: 
                    </label>
                    <textarea
                        id='description'
                        name='description'
                        rows={3}
                        className='shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md'
                        defaultValue={''}
                        onChange={onChangeDescription}
                    />
                </div>
                <div className='py-2'>
                    <label htmlFor='description' className='nlock test-sm font-medium text-gray-700'>
                        Responsible: 
                    </label>
                    <textarea
                        id='responsible'
                        name='responsible'
                        rows={1}
                        className='shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md'
                        defaultValue={''}
                        onChange={onChangeResponsible}
                    />
                </div>
                <div className="flex items-center">
                        <input
                            type='radio'
                            id='priorityLow'
                            name='priorityOptions'
                            value="Low"
                            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                            onChange={onChangePriority}
                        >
                        </input>
                        <label htmlFor='priorityLow' className="ml-1 block text-sm font-medium text-gray-700">
                            Low
                        </label>
                        <input
                            type='radio'
                            id='priorityModerate'
                            name='priorityOptions'
                            value="Moderate"
                            className="focus:ring-indigo-500 ml-2 h-4 w-4 text-indigo-600 border-gray-300"
                            onChange={onChangePriority}
                        >
                        </input>
                        <label htmlFor='priorityModerate' className="ml-1 block text-sm font-medium text-gray-700">
                            Moderate
                        </label>
                        <input
                            type='radio'
                            id='priorityHigh'
                            name='priorityOptions'
                            value="High"
                            className="focus:ring-indigo-500 ml-2 h-4 w-4 text-indigo-600 border-gray-300"
                            onChange={onChangePriority}
                        >
                        </input>
                        <label htmlFor='priorityHigh' className="ml-1 block text-sm font-medium text-gray-700">
                            High
                        </label>
                </div>
                <div className="px-4 py-3 text-right sm:px-6">
                    <button
                        type="submit"
                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    )
}

export default CreateTodo;