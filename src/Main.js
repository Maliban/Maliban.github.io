import React from "react";
const people=[
{
    name: 'Abel',
    surname: 'Ablowata',
    age: '26',
}
{
    name: 'Jan',
    surname:'Niezbędny',
    age:'18',
}
{
    name: 'Piotr',
    surname:'Potrzebny',
    age:'30',
}

]
const peopleRenderCallback = (person) => {
    return <li>{person.name}</li>
}
class Main extends React.Component{
    render(){
        return <main>
            <ol>
                {people.map(peopleReaderCallback)}
                </ol>
                <ul>
        {people.map(function(person){
            return<li className={person.age > 30 ? 'background'}>
            {person.name} {person.surname}
            </li>
        })}
        </ul>
            
        </main>
    }
}
export default Main;