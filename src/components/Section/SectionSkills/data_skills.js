const intermediate = 'intermediate';
const everyday = 'everyday';
const sometimes = 'sometimes';
const barely = 'barely use it';
const every_other_day = 'every other day';
const its_been_a_while = " it's been a while";
const confident = 'confident';

const skills = {
  languages: {
    JavaScript: {
      level: [everyday, confident],
      projects: {
        project1: {
          description: 'news feed with GraphQl',
          link: 'https://github.com/dujar/news_feed_withgraphql.git',
          web: "",
          logos: ['GraphQL', 'React']
        },
        project2: {
          description: 'React with Redux: Udacity second project',
          link: 'https://github.com/dujar/project_posts_comments.git',
          web: "",
          logos: ['React', 'Redux']
        },
        project3: {
          description: 'React state management: Udacity first project:',
          link: 'https://github.com/dujar/myreads_react.git',
          web: "",
          logos: ['React']
        },
        project4: {
          description: " Nuxt application. Making a react Hacker News.",
          link: "https://github.com/dujar/Nuxt-hackernews",
          web: "https://tutorialfromegghead-nuxt-hackernews-ytykafwbmr.now.sh/",
          logos: ['Nuxt','Vue']
        }
      }
    },
    R: {
      level: [sometimes, intermediate],
      projects: {
        project1: {
          description: 'Shiny App with R',
          link: 'https://github.com/dujar/app-FabricioDujardin.git',
          logos: ['Rpackages']
        },
        propject2: {
          description: 'Machine learning course final project',
          link: 'https://github.com/dujar/machinelearning_coursera/blob/master/machinelearningassignment.md',
          logos: ['Rpackages']
        }
      }
    },
    Ruby: {
      level: [barely, its_been_a_while],
      projects: {
        project1: {
          description: 'CRUD with Ruby and database',
          link: 'https://github.com/dujar/rbnd-toycity-part4.git',
          logos: false
        }
      }
    },
    Python: {
      level: [barely, its_been_a_while],
      projects: {
        project1: {
          description: 'movie trailer website, Udacity Nanodegree project 1',
          link:
            'https://github.com/dujar/web-site-trailers--udacity-project-one.git',
          logos: []
        }
      }
    }
  },
  web: {
    frontend: {
      css: [everyday, confident],
      sass: [every_other_day, intermediate],
      framework: [
        { react: [everyday, confident] },
        { vuejs: [sometimes, intermediate] },
        { angular: [barely, intermediate] },
        { rubyonrails: [barely, its_been_a_while] }
      ]
    },
    backend: {
      restAPI: [sometimes, intermediate],
      express: [sometimes, intermediate]
    }
  }
};

export default skills;
