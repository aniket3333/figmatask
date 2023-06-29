import React from "react";
import { Course } from "../components/Course/Course";
import { Frame } from "../components/Frame/Frame";
import { Plan } from "../components/Plan/Plan";
import "./style.css";

export const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="div-5">
        <div className="overlap">
          <div className="group">
            <div className="overlap-group">
              <img
                className="polygon"
                alt="Polygon"
                src="https://generation-sessions.s3.amazonaws.com/3ac815ab615013592205d4b8886c8269/img/polygon-1-1.svg"
              />
              <img
                className="polygon-2"
                alt="Polygon"
                src="https://generation-sessions.s3.amazonaws.com/3ac815ab615013592205d4b8886c8269/img/polygon-1.svg"
              />
              <div className="ellipse" />
            </div>
          </div>
          <img
            className="pngwing"
            alt="Pngwing"
            src="https://generation-sessions.s3.amazonaws.com/3ac815ab615013592205d4b8886c8269/img/pngwing-1.png"
          />
          <header className="header">
            <div className="text-wrapper-2">Logo</div>
            <div className="frame-5">
              <div className="text-wrapper-3">About</div>
              <div className="text-wrapper-3">Pricing</div>
              <div className="text-wrapper-3">Review</div>
            </div>
          </header>
          <div className="frame-6">
            <div className="course-2">
              <Course className="design-component-instance-node" />
              <Course className="course-instance" />
              <Course className="course-3" />
              <Course className="course-4" />
            </div>
            <div className="frame-7">
              <div className="title">
                <div className="text-wrapper-4">About the Course</div>
                <p className="lorem-ipsum-is-2">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industry&#39;s standard dummy text ever since the 1500s, when an unkno
                </p>
              </div>
              <div className="button">
                <div className="text-wrapper-5">Explore Now</div>
              </div>
            </div>
          </div>
          <div className="overlap-wrapper">
            <div className="overlap-2">
              <div className="content">
                <div className="title-2">
                  <p className="lorem-ipsum-is-3">
                    Lorem Ipsum is simply dummy text of the printing and typesetting in ustry. Lorem Ipsum has been the
                    industry&#39;s standard dummy text ever since the 1500s
                  </p>
                  <p className="text-wrapper-6">Learn how to launch a successful podcast</p>
                </div>
                <div className="div-wrapper">
                  <div className="text-wrapper-7">Sign up Now</div>
                </div>
              </div>
              <img
                className="group-2"
                alt="Group"
                src="https://generation-sessions.s3.amazonaws.com/3ac815ab615013592205d4b8886c8269/img/group-75.png"
              />
              <img
                className="everyone-is-smiling"
                alt="Everyone is smiling"
                src="https://generation-sessions.s3.amazonaws.com/3ac815ab615013592205d4b8886c8269/img/everyone-is-smiling-listens-group-people-business-conference-mod@2x.png"
              />
              <img
                className="group-business"
                alt="Group business"
                src="https://generation-sessions.s3.amazonaws.com/3ac815ab615013592205d4b8886c8269/img/group-business-workers-smiling-happy-confident-working-together-@2x.png"
              />
              <img
                className="streamline-computer"
                alt="Streamline computer"
                src="https://generation-sessions.s3.amazonaws.com/3ac815ab615013592205d4b8886c8269/img/streamline-computer-voice-mail-mic-audio-mike-music-microphone.svg"
              />
              <img
                className="solar-podcast"
                alt="Solar podcast"
                src="https://generation-sessions.s3.amazonaws.com/3ac815ab615013592205d4b8886c8269/img/solar-podcast-outline.svg"
              />
            </div>
          </div>
          <div className="overlap-group-wrapper">
            <div className="overlap-3">
              <div className="group-3">
                <div className="overlap-group-2">
                  <img
                    className="line"
                    alt="Line"
                    src="https://generation-sessions.s3.amazonaws.com/3ac815ab615013592205d4b8886c8269/img/line-1.svg"
                  />
                  <img
                    className="line-2"
                    alt="Line"
                    src="https://generation-sessions.s3.amazonaws.com/3ac815ab615013592205d4b8886c8269/img/line-2.svg"
                  />
                  <img
                    className="line-3"
                    alt="Line"
                    src="https://generation-sessions.s3.amazonaws.com/3ac815ab615013592205d4b8886c8269/img/line-3.svg"
                  />
                  <h1 className="h-1">Podcast</h1>
                </div>
              </div>
              <div className="group-4">
                <div className="frame-8">
                  <div className="div-6">
                    <div className="text-wrapper-8">Choose your plan</div>
                    <p className="lorem-ipsum-is-4">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                      the industry&#39;s
                    </p>
                  </div>
                  <div className="radio">
                    <div className="frame-9">
                      <div className="text-wrapper-9">monthly</div>
                    </div>
                    <div className="text-wrapper-10">yearly</div>
                  </div>
                </div>
                <div className="group-5">
                  <Plan className="design-component-instance-node" />
                  <Plan className="plan-instance" />
                  <Plan
                    basicPlanClassName="plan-2"
                    className="plan-4"
                    elementClassName="plan-2"
                    frameClassName="plan-3"
                    freeAccessToVideoClassName="plan-2"
                    freeAccessToVideoClassNameOverride="plan-2"
                    img="https://generation-sessions.s3.amazonaws.com/3ac815ab615013592205d4b8886c8269/img/vector-2.svg"
                    loremIpsumIsClassName="plan-2"
                    monthClassName="plan-2"
                    pClassName="plan-2"
                    text="Premium Plan"
                    vector="https://generation-sessions.s3.amazonaws.com/3ac815ab615013592205d4b8886c8269/img/vector-2.svg"
                    vector1="https://generation-sessions.s3.amazonaws.com/3ac815ab615013592205d4b8886c8269/img/vector-2.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="frame-10">
          <img
            className="frame-11"
            alt="Frame"
            src="https://generation-sessions.s3.amazonaws.com/3ac815ab615013592205d4b8886c8269/img/frame-84.svg"
          />
          <div className="frame-12">
            <div className="frame-13">
              <div className="text-wrapper-11">Review from customers</div>
              <p className="text-wrapper-12">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry
              </p>
            </div>
            <div className="frame-14">
              <Frame
                className="frame-18"
                frame="https://generation-sessions.s3.amazonaws.com/3ac815ab615013592205d4b8886c8269/img/frame-20-2.svg"
              />
              <div className="overlap-group-3">
                <Frame
                  className="design-component-instance-node"
                  frame="https://generation-sessions.s3.amazonaws.com/3ac815ab615013592205d4b8886c8269/img/frame-20-2.svg"
                />
                <Frame
                  className="frame-18-instance"
                  frame="https://generation-sessions.s3.amazonaws.com/3ac815ab615013592205d4b8886c8269/img/frame-20.svg"
                  frameClassName="frame-instance"
                />
                <img
                  className="frame-15"
                  alt="Frame"
                  src="https://generation-sessions.s3.amazonaws.com/3ac815ab615013592205d4b8886c8269/img/frame-85.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="frame-16">
          <div className="overlap-4">
            <div className="frame-17">
              <p className="text-wrapper-13">All Right Reserved @Copyright 2023</p>
              <div className="frame-19">
                <div className="frame-20">
                  <div className="text-wrapper-14">Terms of Service</div>
                  <div className="text-wrapper-14">Privacy Policy</div>
                  <div className="text-wrapper-14">Product</div>
                </div>
                <img
                  className="frame-21"
                  alt="Frame"
                  src="https://generation-sessions.s3.amazonaws.com/3ac815ab615013592205d4b8886c8269/img/frame-90.svg"
                />
              </div>
            </div>
            <div className="frame-22">
              <div className="div-6">
                <p className="text-wrapper-8">We have what you’re looking for</p>
                <p className="lorem-ipsum-is-5">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                  a
                </p>
              </div>
              <div className="button">
                <div className="text-wrapper-15">Get Started Now</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
