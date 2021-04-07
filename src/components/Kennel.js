import React from "react"
import "./Kennel.css"
<<<<<<< HEAD
import { PropsAndState } from "./PropsAndState"
=======
import { AnimalCard } from "./animal/AnimalCard"
import "./animal/Animal.css"
import { LocationCard } from "./location/Location"
import "./location/Location.css"
import { CustomerCard } from "./customer/Customer"
import "./customer/Customer.css"
import { EmployeeCard } from "./employee/Employee"
import "./employee/Employee.css"
>>>>>>> main

export const Kennel = () => (
    <>
        <h2>Nashville Kennels</h2>
        <small>Loving care when you're not there.</small>
        <address>
            <div>Visit Us at the Nashville North Location</div>
            <div>500 Puppy Way</div>
        </address>

        <h2>Animals</h2>
        <article className="animals">
            <AnimalCard />
            <AnimalCard />
            <AnimalCard />
        </article>

        <h2>Locations</h2>
        <article className="locations">
            <LocationCard />
            <LocationCard />
        </article>

        <h2>Customers</h2>
        <article className="customers">
            <CustomerCard />
            <CustomerCard />
            <CustomerCard />
        </article>

        <h2>Employees</h2>
        <article className="customers">
            <EmployeeCard />
            <EmployeeCard />
            <EmployeeCard />
        </article>


    </>
);

<>
<PropsAndState yourName="Salma" />
<h2>Animals</h2>
<article className="animals">
    <AnimalCard />
    <AnimalCard />
    <AnimalCard />
</article>
</>