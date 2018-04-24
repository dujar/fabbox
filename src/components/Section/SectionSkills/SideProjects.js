import React, { Component } from 'react';

class SideProjects extends Component {
  state = {
    project: false,
    toggleState: 'init'
  };

  showProjects = language => {
    this.setState(state => ({
      project: !state.project
    }));
    this.props.handleToggle(language);
  };

  render() {
    const { data, toggle, language } = this.props;

    return (
      <div className={`flex flex-col justify-start`}>
        <div
          onClick={() => this.showProjects(language)}
          className="font-bold capitalize font-indie self-center hover:bg-white bg-blue hover:text-black hover:cursor-pointer text-white"
        >
          Projects{' '}
        </div>{' '}
        {this.state.project &&
          toggle === language && (
            <div className="rounded border p-1">
              {' '}
              {Object.keys(data).map(project => {
                console.log(data.description);
                return (
                  <div className="flex flex-row items-center justify-between border rounded hover:bg-white hover:shadow-inner">
                    <div>
                      {' '}
                      {data[project].description}{' '}
                      <a
                        target="_blank"
                        rel="noopener"
                        href={data[project].link}
                        className="font-bold"
                      >
                        {' '}
                        github link{' '}
                      </a>{' '}
                      |{' '}
                      {data[project].web ? (
                        <a
                          target="_blank"
                          rel="noopener"
                          className="font-bold"
                          href={data[project].web}
                        >
                          {' '}
                          web link{' '}
                        </a>
                      ) : (
                        <span> no website... </span>
                      )}{' '}
                    </div>{' '}
                    {data[project].logos && (
                      <div
                        className={`${
                          data[project].logos[0]
                        }-logo logo bg-fit image`}
                      />
                    )}{' '}
                    {data[project].logos ? (
                      data[project].logos.length > 1 ? (
                        <div
                          className={`${
                            data[project].logos[1]
                          }-logo logo bg-fit image`}
                        />
                      ) : null
                    ) : null}{' '}
                  </div>
                );
              })}{' '}
            </div>
          )}{' '}
      </div>
    );
  }
}

export default SideProjects;
