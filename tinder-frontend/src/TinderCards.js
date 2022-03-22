import React, { useState } from 'react'
import './TinderCards.css'
import TinderCard from 'react-tinder-card'

function TinderCards() {
  const [people, setPeople] = useState([
    {
      name: 'Elon Musk',
      url: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg',
    },
    {
      name: 'Afeez Aderemi',
      url: 'https://avatars.githubusercontent.com/u/20205598?s=400&u=c2b73c55ba38239976583d55f3d7ce4df212bc2d&v=4',
    },
    {
      name: 'Jack Dosey',
      url: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg',
    },
  ])

  const swiped = (direction, nameTODelete) => {
    console.log('removing' + nameTODelete)
  }
  const outOfFrame = (name) => {
    console.log(name + ' left the screen')
  }
  return (
    <div className='tinderCards'>
      <div className='tinderCards_cardContainer'>
        {people.map((person) => (
          <TinderCard
            className='swipe'
            key={person.name}
            preventSwipe={['up', 'down']}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className='card'
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  )
}

export default TinderCards
