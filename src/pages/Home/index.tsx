import { useState } from "react"
import { IoMdSearch } from "react-icons/io"

import { Container, Glass, Infos } from "./styles"

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

import initialPic from "../../../src/assets/initialPic.jpeg"

export function Home() {
  const [pic, setPic] = useState(initialPic)
  const [country, setCountry] = useState("")
  const [capital, setCapital] = useState("")
  const [region, setRegion] = useState("")
  const [subRegion, setSubRegion] = useState("")
  const [language, setLanguage] = useState("")
  const [currency, setCurrency] = useState("")
  const [population, setPopulation] = useState("")

  interface Country {
    flag: string;
    name: string;
    capital: string;
    region: string;
    subregion: string;
    languages: {[key: string]: string};
    currencies: {[key:string]: {name:string}};
    population: string;
  }

  async function search() {
    const inputSearch = document.querySelector(".input-search") as HTMLInputElement
    const inputSearchValue = inputSearch.value

    if(inputSearchValue === "") {
      return
    }

    try {
      const link = `https://countryinfoapi.com/api/countries/name/${inputSearchValue}`
      const response = await fetch(link)
      const data: Country =  await response.json()

      setPic(data.flag)
      setCountry(data.name)
      setCapital(data.capital)
      setRegion(data.region)
      setSubRegion(data.subregion)

      const languageCode = Object.keys(data.languages)[0]
      setLanguage(data.languages[languageCode])

      const currencyCode = Object.keys(data.currencies)[0]
      setCurrency(data.currencies[currencyCode]?.name)

      setPopulation(data.population)
    } catch {
      return alert("Not found :(")
    }
  }

  return(
    <Container>

      <Glass>
        <img src={pic} alt="Flag's image"/>
        <p className="sr-only">Search for infos about the country</p>

        <div className="search">
          <Input placeholder="Country name" className="input-search"/>
          <Button icon={IoMdSearch} onClick={search}/>
        </div>

        <Infos>
          <div>
            <p>Name:</p>
            <p>{country}</p>
          </div>

          <div>
            <p>Capital:</p>
            <p>{capital}</p>
          </div>

          <div>
            <p>Region:</p>
            <p>{region}</p>
          </div>

          <div>
            <p>Sub-region:</p>
            <p>{subRegion}</p>
          </div>

          <div>
            <p>Language:</p>
            <p>{language}</p>
          </div>

          <div>
            <p>Currency:</p>
            <p>{currency}</p>
          </div>

          <div>
            <p>Population:</p>
            <p>{population}</p>
          </div>
        </Infos>
      </Glass>
    </Container>
  )
}