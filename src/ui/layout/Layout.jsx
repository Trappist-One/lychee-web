import { createContext } from "react"
import Header from './Header'

const C = createContext()

export default function Layout() {
    return (
        <C.Provider value='1'>
            <Header></Header>
        </C.Provider>

    )
}