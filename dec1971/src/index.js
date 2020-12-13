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
        ]}/>
  </React.StrictMode>,
  document.getElementById('root')
);
