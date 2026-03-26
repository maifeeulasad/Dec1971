import React from 'react';
import { createRoot } from 'react-dom/client';
import { CATEGORIES, GALLERY_ITEMS, Gallery } from "react-mua-gallery";

const LEGACY_IMAGES = [
  {
    url: "https://raw.githubusercontent.com/maifeeulasad/Dec1971/content/images/death_toll.jpg",
    title: "Toll",
    details: "We still don't know what that kid did ?",
  },
  {
    url: "https://raw.githubusercontent.com/maifeeulasad/Dec1971/content/images/moment_before_that_moment.jpg",
    title: "Before the final moment",
    details: ".",
  },
  {
    url: "https://raw.githubusercontent.com/maifeeulasad/Dec1971/content/images/pak_mass_surrender.jpg",
    title: "Pak military surrender",
    details: "Largest surrender after WW2",
  },
  {
    url: "https://raw.githubusercontent.com/maifeeulasad/Dec1971/content/images/that_final_moment.jpg",
    title: ".",
    details: ".",
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
];

function normalizeLegacyImage(image, index) {
  const nameFromUrl = image.url.split("/").pop() || `legacy-${index + 1}.jpg`;
  const title = image.title && image.title !== "." ? image.title : `Historic photo ${index + 1}`;
  const details = image.details && image.details !== "." ? image.details : title;

  return {
    id: `legacy-${index + 1}`,
    mediaType: "image",
    src: image.url,
    thumbnail: image.url,
    title,
    filename: nameFromUrl,
    date: "1971",
    location: "Bangladesh",
    camera: "Archived",
    dimensions: "Unknown",
    category: "all",
    tags: ["Liberation War", "Archive"],
    description: details,
    notes: "Made with LOVE by MUA",
    alt: title,
    group: "Our Liberation War",
    span: "normal",
  };
}

const LEGACY_ITEMS = LEGACY_IMAGES.map(normalizeLegacyImage);

// Keep legacy images while using the package's base Gallery component.
GALLERY_ITEMS.splice(0, GALLERY_ITEMS.length, ...LEGACY_ITEMS);
CATEGORIES.splice(0, CATEGORIES.length, { id: "all", label: "All", icon: "grid_view" });

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root element not found');
}

createRoot(rootElement).render(
  <React.StrictMode>
    <Gallery
      galleryTitle={"71"}
      onSearch={() => console.log("search")}
      onFilter={() => console.log("filter")}
      onAccount={() => console.log("account")}
    />
  </React.StrictMode>
);
