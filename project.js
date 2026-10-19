/* ============================================================
   FILMS BY SAURABH: the only file you need to edit.

   HOW TO USE YOUR OWN PHOTOS
   1. Make a folder called "images" next to index.html.
   2. Copy your photos into it (JPG, about 1600px wide, under 500 KB each).
   3. Change the file names below to match your photos.
   4. Upload index.html, projects.js and the images folder together.
   ============================================================ */

const SITE = {
  heroImage: "hero.jpg",                 // big photo at the top (landscape, 2000px wide is ideal)
  heroAlt: "Describe your hero photo",
  instagram: "https://www.instagram.com/filmsbysaurabh/"
};

/* Each project is one card.
   category: travel | cinema | brand | photo
   size:     "wide" (big, 2 columns), "tall" (portrait, for reels), or "" (normal)
   link:     where the card opens (an Instagram reel, YouTube video, etc.)
   embed:    optional. Use instead of image to show an Instagram reel inside the card. */
const PROJECTS = [
  {
    title: "Somewhere Above the Noise",
    type: "Travel film",
    category: "travel",
    size: "wide",
    image: "images/travel.jpg",
    alt: "Mountains above the clouds",
    link: "https://www.instagram.com/filmsbysaurabh/"
  },
  {
    title: "Brand shoot, featured reel",
    type: "Brand reel",
    category: "brand",
    size: "tall",
    image: "images/brand.jpg",
    alt: "Brand shoot reel thumbnail",
    link: "https://www.instagram.com/reel/DXRfW60DMUV/"
  },
  {
    title: "Chasing the Light",
    type: "Cinematography, visual study",
    category: "cinema",
    size: "",
    image: "images/cinematic.jpg",
    alt: "Behind the scenes on a shoot"
  },
  {
    title: "Quiet Places, Lasting Frames",
    type: "Landscape photography",
    category: "photo",
    size: "",
    image: "images/landscape.jpg",
    alt: "A calm lake and forest",
    link: "https://www.instagram.com/fotozzz__?dlrf=MWt1czhhdTlqaGMzaQ%3D%3D&utm_source=qr"
  }
  /* To add more, copy a block above, add a comma after the previous one, and edit it. */
];