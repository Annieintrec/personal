﻿import React, { Component } from "react";
import { Link } from "react-router-dom";

import { store, actions } from "Core/UI/Store";

import { TimelineEducation, TimelineWorkExperience } from "./Components";

import Button from "Core/UI/Components/Button";

import { PageSeparator } from "Core/UI/Components/Separators";
import { FadeInAndPanDown, FadeIn } from "Core/UI/Transitions";

export default class Home extends Component {
  componentWillMount() {
    store.dispatch(
      actions.setColorTheme({
        body: "light",
        header: "dark"
      })
    );
  }

  render() {
    return (
      <div className="page page-home">
        <div className="content-container-dark">
          <div className="pre-content">
            <h1 className="font-weight-normal">Alexander Nilsson</h1>
            <h3>Webbutveckling, projektplanering?, med mera.</h3>
          </div>

          <div className="content">
            <FadeInAndPanDown duration={750}>
              <div className="row no-gutters justify-content-center my-4 py-4">
                <div className="mb-4 mb-md-0 col-md-3 text-center position-relatvie">
                  <FadeInAndPanDown duration={1250}>
                    <img
                      src="assets/parts/layers.png"
                      alt="Tre lager ovanpå varandra i olika färger."
                      style={{
                        marginLeft: "1em",
                        maxWidth: "66vw",
                        maxHeight: "177px",
                        opacity: 0.75
                      }}
                    />
                  </FadeInAndPanDown>
                </div>

                <div className="col-md-9 align-self-center">
                  <div className="container text-shadow-minimal">
                    <h2 className="font-weight-light text-upper-heading">
                      Hela stacken
                    </h2>

                    <p className="text-readable-2x">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Maecenas elementum viverra consectetur. Aenean vel erat ut
                      tellus aliquam laoreet. Suspendisse potenti. In hac
                      habitasse platea dictumst. Quisque dapibus dolor eleifend
                      interdum dictum. Interdum et malesuada fames ac ante ipsum
                      primis in faucibus.
                    </p>

                    <div className="mt-4 text-center">
                      <Link to="/toolbox">
                        <Button>Min verktygslåda</Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInAndPanDown>
          </div>

          <PageSeparator from="rgb(15, 15, 25)" to="rgb(235, 235, 245)" />
        </div>

        <div className="content-container-light bg-transparent">
          <div className="content">
            <FadeIn delay={500} duration={750}>
              <div className="timeline-group">
                <h2 className="timeline-group-title">Arbetslivserfarenhet</h2>

                <TimelineWorkExperience />
              </div>

              <div className="timeline-group">
                <h2 className="timeline-group-title">Utbildning</h2>

                <TimelineEducation />
              </div>
            </FadeIn>

            <p />
          </div>
        </div>
      </div>
    );
  }
}
