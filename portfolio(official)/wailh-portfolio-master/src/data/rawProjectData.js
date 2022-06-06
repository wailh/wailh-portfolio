/* 
   Overview: the rawProjectData consists of data that will be 
   used in Page Work thumbnail section and single project detail page(if exist)
   
   id - id for the project [String]
   title - name of the projec [String]
   briefDescription - A simple and brief summary of the project that will be displayed in the thumbnail section [String]
   tags - A highlight tools about the project that will be displayed in the thumbnail section [Array of Strings]
   thumbnailImgUrl - screenshot of the project that will be displayed in the thumbnail section [Image Path]
   livesite - URL of the live site of the project [External URL] (OPTIONAL)
   github - URL of the GitHub repo of the project [External URL] (OPTIONAL)
   category - featured/fun, used for filter feature in Page Work [String]
   moreInfo - boolean value, true if the project has a single project detail page [Boolean]

   <--- OPTIONAL || If a project has a single detail page, need to add the following data --->
   bannerImgUrl - local img URL, for displaying banner image in single project detail page [Image Path]
   bannerImgMobileUrl - local img URL, when browser width smaller than 499px(mobile devices) [Image Path]
   overview - the overview of the project in single project detail page [String]
   duration - duration of the project in single project detail page [String] (OPTIONAL)
   team - team of the project [Array of String] (OPTIONAL)
   roles - roles of the project in single project detail page [Array of String]
   stack - tools/languages used in single project detail page [Array of String]
   design - design aspect of the project, an array consists of objects [Array of Objects] (OPTIONAL)
          -- title -> object property, represents the title of a deisgn block [String]
          -- description -> object property, represents the paragraphs of a topic in a deisgn block [Array of Strings]
          -- designURL -> object property, represents the external design related URL (Prototype/Mockup), has a title and link property [Array of Object] (OPTIONAL)
          -- img -> object property, represents a image of a topic in a deisgn block [Image Path] (OPTIONAL)
   development - development aspect of the project, an array consists of objects [Array of Objects] (OPTIONAL)
              -- title -> object property, represents the title of a development block [String]
              -- description -> object property, represents the paragraphs of a topic in a development block [Array of Strings]
              -- img -> object property, represents a image of a topic in a development block [Image Path] (OPTIONAL)
   imgSlider - image slider, passing it as a prop to SingeProjectSlider component [Object] (OPTIONAL)
             -- sliderTitle -> title of the slider block [String] (OPTIONAL)
             -- sliderDescription --> description paragraph of the slider block [String] (OPTIONAL)
             -- imgs --> image file for the slider [Array of Image Path]
    reflection - paragraph to summerize and reflect the project [String] (OPTIONAL)
*/

// import thumbnail images
import recipeThumbImg from '../assets/assets/recipes.PNG';
import portfolioThumbImg from '../assets/assets/portfolio.PNG';
import weatherAppThumbImg from '../assets/assets//weather.PNG';
import phooneking from '../assets/assets//phooneking.PNG';
import snackworld from '../assets/assets//snackworld.PNG';


export const rawProjectData = [
    {
    id: 'snackWorld',
    title: 'SnackWorld',
    briefDescription:
      'A restaurant menu that offers a lot of foods to clients',
    tags: ['React', 'HTML', 'Css', 'LocalStorage', 'Redux', 'GitHub'],
    thumbnailImgUrl: snackworld,
    livesite: 'https://629ba73c5413212c2e8f7a16--snackworld.netlify.app/',
    github: 'https://github.com/wailh/SnackWorld',
    category: 'featured',
  },
  {
    id: 'recipesApp',
    title: 'RecipesApp',
    briefDescription:
      'A site for creative recipes',
    tags: ['React', 'HTML5', 'Bootstrap', 'Css3', 'GitHub'],
    thumbnailImgUrl: recipeThumbImg,
    livesite: 'https://wail-recipes.herokuapp.com/',
    github: 'https://github.com/wailh/Recipe-App/tree/master',
    redux: 'https://recipes-app-redux.herokuapp.com/',
    category: 'featured',
  },

  {
    id: 'phoneStore',
    title: 'PhooneKing',
    briefDescription:
      'An ecommerce app for selling phones',
    tags: ['React', 'HTML', 'Bootstrap', 'Sentry', 'LocalStorage', 'styled-component', 'GitHub'],
    thumbnailImgUrl: phooneking,
    livesite: 'https://phooneking.herokuapp.com/',
    github: 'https://github.com/wailh/phone-ecommerce',
    category: 'featured',
  },

  // {
  //   id: 'tranquil-tofino-cabins',
  //   title: 'Tranquil Tofino Cabins',
  //   briefDescription:
  //     'A fully customized cabin rental business website that comes with an online booking feature. The site was developed using WordPress and WooCommerce plugins in a collaborative team.',
  //   tags: ['WordPress', 'WooCommerce', 'PHP', 'HTML5', 'Sass'],
  //   thumbnailImgUrl: tranquilTofinoCabinsThumbImg,
  //   livesite: 'https://tranquiltofino.bcitwebdeveloper.ca/',
  //   //github: '#',
  //   category: 'featured',
  // },
  {
    id: 'portfolio',
    title: 'Portfolio Site',
    briefDescription:
      'A portfolio website that was designed and developed as a platform to showcase my design and development skills as a front-end developer.',
    tags: ['React', 'HTML5'],
    thumbnailImgUrl: portfolioThumbImg,
    livesite: 'https://wailh-portfolio.herokuapp.com/',
    github: 'https://github.com/wailh/Portfolio/tree/master',
    category: 'featured',
  },
  // {
  //   id: 'codeBreaker',
  //   title: 'Code Breaker',
  //   briefDescription:
  //     'A browser-based code guessing game using jQuery, JavaScript and object-oriented programming principles. Comes with difficulty level selection, countdown timer and star rating features.',
  //   tags: ['jQuery', 'JavaScript', 'HTML5', 'CSS3', 'BootStrap'],
  //   thumbnailImgUrl: codeBreakerThumbImg,
  //   livesite: 'https://ztan.ca/code-breaker/',
  //   github: 'https://github.com/jimmytan123/Code-Breaker-Game',
  //   category: 'fun',
  // },
  {
    id: 'weather-app',
    title: 'Weather App',
    briefDescription:
      'The responsive weather app allows you to search for a city or click Show My Location to get the weather info. The background image is from Unsplash API and it changes according to different cities. ',
    tags: ['JavaScript', 'HTML5'],
    thumbnailImgUrl: weatherAppThumbImg,
    livesite: 'https://weather-appction.herokuapp.com/',
    github: 'https://github.com/wailh/weather-app/tree/master',
    category: 'fun',
  },
  // {
  //   id: 'gallery',
  //   title: 'Gallery',
  //   briefDescription:
  //     'A responsive masonry gallery that showcases my interests in landscape photography. All the images can be uploaded from local devices via the site.',
  //   tags: ['ReactJS', 'Sass', 'Firebase'],
  //   thumbnailImgUrl: galleryThumbImg,
  //   livesite: 'https://ztan.ca/gallery/',
  //   category: 'fun',
  // },
];
