// import thumbnail images
import recipeThumbImg from '../assets/assets/recipes.PNG';
import portfolioThumbImg from '../assets/assets/portfolio.PNG';
import weatherAppThumbImg from '../assets/assets//weather.PNG';
import phooneking from '../assets/assets//phooneking.PNG';


export const rawProjectData = [
  {
    id: 'moviewave',
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
    tags: ['React', 'HTML', 'Bootstrap', 'Sentry', 'styled-component', 'GitHub'],
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
