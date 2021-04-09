import React from "react"
import { Route } from "react-router-dom"
import { Home } from "../Home"
import { AnimalList } from "./animal/AnimalList"
import { CustomerCard } from "./customer/Customer"
import { EmployeeCard } from "./employee/Employee"
import { LocationCard } from "./location/Location"

export const ApplicationViews = () => {
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/">
                <Home />
            </Route>

            {/* Render the animal list when http://localhost:3000/animals */}
            <Route path="/locations">
              <LocationCard />
            </Route>

            {/* Render the animal list when http://localhost:3000/animals */}
            <Route path="/animals">
              <AnimalList />
            </Route>

            {/* Render the animal list when http://localhost:3000/animals */}
            <Route path="/employees">
              <EmployeeCard />
            </Route>

            {/* Render the animal list when http://localhost:3000/animals */}
            <Route path="/customers">
              <CustomerCard />
            </Route>
        </>
    )
}