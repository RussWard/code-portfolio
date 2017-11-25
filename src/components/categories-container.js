import React from 'react'
import Category from './category'
import git_workflow from '../assets/git_workflow.png'

class CategoriesContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      styleSheetAdded: false
    }
    this.addStylesheet = this.addStylesheet.bind(this);
  }

  addStylesheet(href) {
    if (!this.state.stylesheetAdded) {
      this.setState({ stylesheetAdded: true });
      var link = document.createElement('link');
      link.type = 'text/css';
      link.rel = 'stylesheet';
      link.href = href;

      document.head.appendChild(link);
    }
  }

  render() {
    return (
      <div>
        <Category 
          addStylesheet={this.addStylesheet}
          category={'Front End'}
          examples={[
            {
              title: 'React Components',
              codeSamples: [
                {
                  code: <script src="https://gist.github.com/RussWard/f99dbae2a6a4e5d3e8b8570a40cb4760"></script>,
                  type: 'gist',
                  description: 'React component utilizing lifecycle methods and socket connections to render a media feed',
                  link: 'https://github.com/iResist/iResist/blob/master/client/src/components/DayOfFeed.jsx',
                },
                {
                  code: <script src="https://gist.github.com/RussWard/f3075895d31ee201954a844db62bb21e"></script>,
                  type: 'gist',
                  description: 'React component to render a flashcard',
                  link: "https://github.com/RussWard/karens-flashcard-app/blob/master/src/components/Flashcard.jsx",
                }
              ]
            },
            {
              title: 'React Containers',
              codeSamples: [
                {
                  code: <script src="https://gist.github.com/RussWard/55042a2ec2a1327e827bedf6f3b002d8"></script>,
                  type: 'gist',
                  description: 'React container to handle mapping definitions returned from Mirriam Webster API to Card components (Utilizes Error Boundary to contain errors due to unexpected formatting variations from the API)',
                  link: "https://github.com/RussWard/karens-flashcard-app/blob/master/src/containers/webster_card.js",
                }
              ]
            },
            {
              title: 'Redux',
              codeSamples: [
                {
                  code: <script src="https://gist.github.com/RussWard/4333f92ccbb4028ec0388390a7a19efe"></script>,
                  type: 'gist',
                  description: 'Redux actions file',
                  link: "https://github.com/RussWard/karens-flashcard-app/blob/master/src/actions/index.js",
                },
                {
                  code: <script src="https://gist.github.com/RussWard/abed40b5d0db5a0c2c40d239bd352963"></script>,
                  type: 'gist',
                  description: 'Redux reducer',
                  link: "https://github.com/RussWard/karens-flashcard-app/blob/master/src/reducers/oxford_reducer.js",
                },
                {
                  code: <script src="https://gist.github.com/RussWard/a46b548bc9c6ded5d8158e7fc1923e39"></script>,
                  type: 'gist',
                  description: 'Redux root reducer',
                  link: "https://github.com/RussWard/karens-flashcard-app/blob/master/src/reducers/index.js",
                }
              ]
            }
          ]}
        />
        <Category 
          addStylesheet={this.addStylesheet}
          category={'Back End'}
          examples={[
            {
              title:'Express Server',
              codeSamples: [
                {
                  code: <script src="https://gist.github.com/RussWard/aa3ec0aa648d8794d3ccf324c19acaf1"></script>,
                  type: 'gist',
                  description: 'Express server index file',
                  link: "https://github.com/RussWard/karens-flashcard-app/blob/master/server/index.js",
                }
              ]
            },
            {
              title: 'SQL Schema',
              codeSamples: [
                {
                  code: <script src="https://gist.github.com/RussWard/9cf11b4149a76c086750fb99659ae240"></script>,
                  type: 'gist',
                  description: 'SQL Schema file',
                  link: 'https://github.com/AwesomeOcelots/AwesomeOcelots/blob/master/server/db/schema.sql',
                }
              ]
            },
            {
              title: 'SQL Queries (raw)',
              codeSamples: [
                {
                  code: <script src="https://gist.github.com/RussWard/d92c2c79380624951378fa260ed879f7"></script>,
                  type: 'gist',
                  description: 'Raw SQL queries',
                  link: 'https://github.com/AwesomeOcelots/AwesomeOcelots/blob/master/server/middleware/dbHandlers.js',
                }
              ]
            },
            {
              title: 'SQL Queries (w/Knex)',
              codeSamples: [
                {
                  code: <script src="https://gist.github.com/RussWard/79f71be1713dcf17b78eabaf1b07df5a"></script>,
                  type: 'gist',
                  description: 'SQL queries using Knex ORM',
                  link: 'https://github.com/iResist/iResist/blob/master/db/models/feed.js',
                }
              ]
            },
            {
              title: 'Database Migrations',
              codeSamples: [
                {
                  code: <script src="https://gist.github.com/RussWard/548e19c0dc3a3f45cbbd05f05978a1c9"></script>,
                  type: 'gist',
                  description: 'Database Migrations',
                  link: 'https://github.com/iResist/iResist/blob/master/db/migrations/20170530163252_setup.js',
                }
              ]
            }
          ]}
        />
        <Category 
          addStylesheet={this.addStylesheet}
          category={'Other Dev Tools'}
          examples={[
            {
              title:'Git Workflow',
              codeSamples: [
                {
                  code: <img src={git_workflow} alt="git workflow image"/>,
                  type: 'image',
                  description: 'A diagram of the git workflow patern I have used',
                }
              ]
            },
            {
              title:'Unit Tests (w/Jest)',
              codeSamples: [
                {
                  code: <script src="https://gist.github.com/RussWard/0a70b14c9567aea3fa0ac1fe08ae7a9c"></script>,
                  type: 'gist',
                  description: 'Unit tests for a clock component using Jest',
                  link: 'https://github.com/RussWard/ring-a-ling/blob/master/tests/clockLogic.test.js',
                },
                {
                  code: <script src="https://gist.github.com/RussWard/d701b78507bf6cdaf1c7a1a166859be0"></script>,
                  type: 'gist',
                  description: 'Unit tests for a checkers game using Jest',
                  link: 'https://github.com/RussWard/checkertron-2000/blob/master/server/tests/gameLogic.test.js',
                }
              ]
            },
            {
              title:'Unit Tests (w/Mocha)',
              codeSamples: [
                {
                  code: <script src="https://gist.github.com/RussWard/42d8e343dae385b08ff2ba51916848cf"></script>,
                  type: 'gist',
                  description: 'Unit tests for a database model handlingq queries relating to events',
                  link: 'https://github.com/iResist/iResist/blob/master/server/test/eventModels.spec.js',
                }
              ]
            },
            {
              title:'App Planning (user stories)',
              codeSamples: [
                {
                  code: <script src="https://gist.github.com/RussWard/a3cbd23e5abd7585c6a827e42bd18c95"></script>,
                  type: 'gist',
                  description: 'User stories to help define necessary features and user expectations for the app',
                  link: 'https://docs.google.com/document/d/1P4n3liWBpKxE2B2WXMGXMJjB8QM7qs7QsgQ4a7F9AKc/edit?usp=sharing',
                }
              ]
            }
          ]}
        />
      </div>
    )
  }
}

export default CategoriesContainer;
