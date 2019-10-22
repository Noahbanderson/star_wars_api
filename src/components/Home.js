import React, { useEffect, useState, useContext } from 'react'
import Axios from 'axios';
import { Header, Card, Button } from 'semantic-ui-react'
import { PeepContext } from '../provider/PeepProvider'


const Home = (props) => {
  const [people, setpeople] = useState([])

  const { setpeeps } = useContext(PeepContext)
  
  useEffect(() => {
    const fetchAPI = async () => {
      let peeps = []
      let plans = []

      await Axios.get("https://swapi.co/api/people?page=1").then(({ data }) => peeps.push(...data.results))
      console.log("peeps: " + peeps)
      await Axios.get("https://swapi.co/api/people?page=2").then(({ data }) => peeps.push(...data.results))
      console.log("peeps: " + peeps)
      await Axios.get("https://swapi.co/api/people?page=3").then(({ data }) => peeps.push(...data.results))
      console.log("peeps: " + peeps)
      await Axios.get("https://swapi.co/api/people?page=4").then(({ data }) => peeps.push(...data.results))
      console.log("peeps: " + peeps)
      await Axios.get("https://swapi.co/api/people?page=5").then(({ data }) => peeps.push(...data.results))
      console.log("peeps: " + peeps)
      await Axios.get("https://swapi.co/api/people?page=6").then(({ data }) => peeps.push(...data.results))
      console.log("peeps: " + peeps)
      await Axios.get("https://swapi.co/api/people?page=7").then(({ data }) => peeps.push(...data.results))
      console.log("peeps: " + peeps)
      await Axios.get("https://swapi.co/api/people?page=8").then(({ data }) => peeps.push(...data.results))
      console.log("peeps: " + peeps)
      await Axios.get("https://swapi.co/api/people?page=9").then(({ data }) => peeps.push(...data.results))
      console.log("peeps: " + peeps)

      await Axios.get("https://swapi.co/api/planets/?page=1").then(({ data }) => plans.push(...data.results))
      console.log("plans: " + plans)
      await Axios.get("https://swapi.co/api/planets/?page=2").then(({ data }) => plans.push(...data.results))
      console.log("plans: " + plans)
      await Axios.get("https://swapi.co/api/planets/?page=3").then(({ data }) => plans.push(...data.results))
      console.log("plans: " + plans)
      await Axios.get("https://swapi.co/api/planets/?page=4").then(({ data }) => plans.push(...data.results))
      console.log("plans: " + plans)
      await Axios.get("https://swapi.co/api/planets/?page=5").then(({ data }) => plans.push(...data.results))
      console.log("plans: " + plans)
      await Axios.get("https://swapi.co/api/planets/?page=6").then(({ data }) => plans.push(...data.results))
      console.log("plans: " + plans)
      await Axios.get("https://swapi.co/api/planets/?page=7").then(({ data }) => plans.push(...data.results))
      console.log("plans: " + plans)

      for (let i = 0; i < peeps.length; i++) { peeps[i].homeworld = plans.find((p) => p.url === peeps[i].homeworld).name; peeps[i].id = i }

      setpeeps(peeps)
      setpeople(peeps)
    }
    
    fetchAPI()

  }, [])

  return (
    <div>
      <br />
      <br />
      <Header as="h2">Star Wars Characters</Header>

      <Card.Group itemsPerRow={4}>
        {people.map(p =>
          <Card key={p.url}>
            <Card.Content>
              <Card.Header>{p.name}</Card.Header>
              <Card.Meta>{p.homeworld}</Card.Meta>
            </Card.Content>
            <Card.Content extra>
              <Button size="mini" color="blue" onClick={() => props.history.push(`/person/${p.id}`)}>View Character</Button>
            </Card.Content>
          </Card>
        )}
      </Card.Group>

      <br />
      <br />
    </div>
  )
}

export default Home

      // for (let i = 0; i < 10; i++) {
      //   fetchAPI(i)
      //   Axios.get(`https://swapi.co/api/people?page=${i}`).then(({data}) => arr.push(...data.results))
      //   debugger
      // }

    // const fetchAPI = async (i) => { await Axios.get(`https://swapi.co/api/people?page=${i}`).then(({ data }) => {console.log(data.results); setpeople(...people, ...data.results)}) }

    // for (let i = 0; i < 10; i++) {
    //   fetchAPI(i)
    // }