import React from 'react'

export default function Show({ fruit, index }) {
    return (
        <div>
            <h1>Show Page</h1>
            The {fruit.name} is {fruit.color}
            <br />
            {fruit.readyToEat ? 'Its is ready to eat' : 'It is not ready to eat... Cant touch this' }
            <br /><br />
            <a href={`/fruits/${index}/edit`}>Edit</a>
            <br /><br />
            <form action={`/fruits/${index}?_method=DELETE`} method='POST'>
                <button>Delete</button>
            </form>
        </div>
    )
}