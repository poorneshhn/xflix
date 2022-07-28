import { FILTER_BY_AGE, FILTER_BY_CATEGORY } from "./filterConstants";
export const DROPDOWN = "dropdown";
export const TEXTFIELD = "textfield";
export const TEXTFIELD_DETAILS = [
  {
    label: "Video Link",
    helperText: "This link will be used to derive the video",
    type: TEXTFIELD,
    id: 1,
    name: "videoLink",
  },

  {
    label: "Thumbnail Image",
    helperText: "This link will be used to preview thumbnail image",
    type: TEXTFIELD,
    id: 2,
    name: "previewImage",
  },
  {
    label: "Title",
    helperText: "The title will be the representative text for video",
    type: TEXTFIELD,
    id: 3,
    name: "title",
  },
  {
    label: "Genre",
    helperText: "Genre will help in categorizing your videos",
    type: DROPDOWN,
    id: 4,
    values: FILTER_BY_CATEGORY,
    name: "genre",
  },
  {
    label: "Suitable age group for the clip",
    helperText: "This will be used to filter videos on age group suitability",
    type: DROPDOWN,
    id: 5,
    values: FILTER_BY_AGE,
    name: "contentRating",
  },
  {
    label: "Release Date",
    helperText: "This will be used to sort videos",
    type: TEXTFIELD,
    subType: "date",
    id: 6,
    name: "releaseDate",
  },
];
