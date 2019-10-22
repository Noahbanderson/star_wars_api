import React, { useContext, useEffect, useState } from 'react'
import { PeepContext } from '../provider/PeepProvider'
import { Card, Header, Button } from 'semantic-ui-react'

const Person = (props) => {
  const [person, setperson] = useState({})

  const { peeps } = useContext(PeepContext)

  useEffect(() => {
    setperson(peeps.find(i => i.id == props.match.params.id))
  }, [])

  return (
    <div>
      <Card.Group>
        <Card>
          <Card.Content>
            <Header as="h1">{person.name}</Header>
            <Card.Meta>{person.homeplanet}</Card.Meta>
          </Card.Content>
          <Card.Content extra>
            Birth Year: {person.birth_year}
            <br />
            Eye Color: {person.eye_color}
            <br />
            Gender: {person.gender}
            <br />
            Hair Color: {person.hair_color}
            <br />
            Height: {person.height}
            <br />
            Mass: {person.mass}
            <br />
            Skin Color: {person.skin_color}
            <br />
            <Button size="mini" color="blue" onClick={() => props.history.push("/")}>Return to Character List</Button>
          </Card.Content>
        </Card>
      </Card.Group>
    </div>
  )
}

export default Person