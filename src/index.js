import React from 'react';
import ReactDOM from 'react-dom';
import Gallery from "react-mua-gallery";
import "react-mua-gallery/dist/dist/index.css";

ReactDOM.render(
  <React.StrictMode>
    <Gallery
        galleryName={"71"}
        owner={"Made with LOVE by MUA"}
        slogan={"Our Liberation War"}
        images={[
            {
                url: "https://raw.githubusercontent.com/maifeeulasad/Dec1971/content/images/death_toll.jpg",
                title: "Toll",
                details: "We still don't know what that kid did ?"
            },
            {
                url: "https://raw.githubusercontent.com/maifeeulasad/Dec1971/content/images/moment_before_that_moment.jpg",
                title: "Before the final moment",
                details: "."
            },
            {
                url: "https://raw.githubusercontent.com/maifeeulasad/Dec1971/content/images/pak_mass_surrender.jpg",
                title: "Pak military surrender",
                details: "Largest surrender after WW2"
            },
            {
                url: "https://raw.githubusercontent.com/maifeeulasad/Dec1971/content/images/that_final_moment.jpg",
                title: ".",
                details: "."
            },
            {
                url: "https://raw.githubusercontent.com/maifeeulasad/Dec1971/content/images/we_are_free_0.jpg",
                title: "We are free",
            },
            {
                url: "https://raw.githubusercontent.com/maifeeulasad/Dec1971/content/images/we_are_free_1.jpg",
                title: "We are free",
            },
            {
                url: "https://raw.githubusercontent.com/maifeeulasad/Dec1971/content/images/we_are_free_2.jpg",
                title: "We are free",
            },
            {
                url: "https://raw.githubusercontent.com/maifeeulasad/Dec1971/content/images/01_all_roads_leading_to_dhaka_web.jpg",
                title: "All roads leading to Dhaka were crowded with jubilant crowds celebrating the liberation of the country.",
            },
            {
                url: "https://raw.githubusercontent.com/maifeeulasad/Dec1971/content/images/02_pakistani_troops_surrendered_to_the_joint_forces_web.jpg",
                title: "Pakistani troops surrendered to the joint forces of freedom fighters and the Indian Army without much opposition. This picture was taken in Chandpur on December 9, 1971.",
            },
            {
                url: "https://raw.githubusercontent.com/maifeeulasad/Dec1971/content/images/03_armoured_vehicles_of_the_indian_army_web.jpg",
                title: "Armoured vehicles of the Indian Army advance towards Khulna following the liberation of Jessore on December 7, 1971.",
            },
            {
                url: "https://raw.githubusercontent.com/maifeeulasad/Dec1971/content/images/04_locals_celebrate_the_liberation_of_kushtia_web.jpg",
                title: "Locals celebrate the liberation of Kushtia was liberated on December 11, 1971.",
            },
            {
                url: "https://raw.githubusercontent.com/maifeeulasad/Dec1971/content/images/05_surrender_of_razakars_a_group_of_razakars_surrender_in_jamalpur_on_december_11_in_1971_web.jpg",
                title: "A group of Razakars surrender in Jamalpur on 11 December, 1971.",
            },
        ]}/>
  </React.StrictMode>,
  document.getElementById('root')
);
