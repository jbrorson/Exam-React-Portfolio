export default {
  nav: {
    logo: 'JB.',
    links: [
      { text: 'Home', to: 'home' },
      { text: 'Experiences', to: 'experiences' },
      { text: 'About', to: 'about' },
      { text: 'Projects', to: 'projects' },
      { text: 'Contact', to: 'contact' },
    ],
  },
  header: {
    // img:

    // 'https://images.unsplash.com/photo-1555952517-2e8e729e0b44?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1300&q=80',
    imgPlaceholder:
      'data:image/jpeg;base64,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',
    text: ["Hello!", "It's me, Josefine", "I am a"],
    typical: [
      "Front-End Developer. 🖥",
      2500,
      "Soccer Player.",
      2500,
      "Team Captain.",
      2500,
      "Dog Lover.",
      2500,
    ],
    btnText: "Get to know me",
  },
  popup: {
    title: ["B-E-V Stockmarket Dashboard", "KYH Onboarding Site"],
    header: ["About this project...", "From idea to reality...", "The process...", "The team"],
    text: ["For this project we were going to build a dynamic page that contains login for user and admin. We had to use some kind of API to fetch data from and we used a stockmarket api. The task also included to display the data in different kind of charts.",
      "We had an idea of how to set this up and what kind of stack we wanted to use. We decided to go for React for the fronend and firebase as the backend. We used Redux to take care of state management.",
      "The fact that we had to think from two perspectives (user and admin) we had to set this up in some kind of backend. To manage that we used firebase. We also added themes that where added to the user based on settings in firebase.",
      "As I think you know at this point this was a team project. The team was me, Elina Larsson, Volkan Guven and Fabian Thoma. We all was study Frontend development during this time and some of us had more experiences than others and we took advantage of that in a good way."
    ],
  },
  stack: {
    title: 'Stack',
    tech: [
      {
        img: '/assets/html5.svg',
        alt: 'html',
      },
      {
        img: '/assets/css3.svg',
        alt: 'css',
      },
      {
        img: '/assets/logo512.png',
        alt: 'react',
      },
      {
        img: '/assets/node.png',
        alt: 'node',
      },
    ],
    desc: `As a front-end developer, I have learned to work with a number of different techniques. I have a great understanding of how these interact. ReactJS, HTML5, CSS3 and NodeJS are a stack that I often use when I develop great websites.`,
  },
  jobs: {
    title: 'Some of my projects',
    job: [
      {
        img: '/assets/bev.png',
        alt: 'bev',
        text: 'the B-E-V App',
      },
      {
        img: '/assets/onboard-kyh.png',
        alt: 'kyh',
        text: 'KYH onboarding',
      },
    ]
  },
};