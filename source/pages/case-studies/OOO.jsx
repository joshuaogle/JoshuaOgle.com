import React from 'react';

import CaseStudy from './CaseStudy';

class OOOCaseStudy extends React.Component {
  render() {
    return (
      <CaseStudy introProps={this.props}>
        <section>
          <div className="section-title">
            Background
          </div>
          <p>
            This is a little something we experimented on at thoughtbot for Out of Office (OOO) notifications.
            We came up with a way to automate the hassle of telling your team you would be gone and made it much simpler.
            We ended up integrating many of these ideas and designs into our larger internal planning app, but I still love the way the original idea looked.
          </p>
        </section>

        <section>
          <div className="section-title">
            The Challenge
          </div>
          <h2>
            If only we knew some developers
          </h2>
          <p>
            Being a consultant sometimes means you have to notify a lot of different people when something comes up.
            Aside from recording it in our HR system, we would also have to mark it down on an office calendar, email our local office and the admins in Boston, and also email our project's client.
            <mark>It was a mess.</mark>
            But the good news is we knew some folks who were pretty good at building this sort of thing.
          </p>
          <p>
            Between PTO, working from home, or working with a client in another city, there were some days the office was pretty empty.
            <mark>We wanted to answer the question &ldquo;Where is everyone?&rdquo;</mark>.
          </p>

          <figure>
            <img src="/source/images/case-studies/ooo-concept.png" className="case-study-example" />
            <figcaption>
              Design exploration and a fun color palette. Office icons by Kyle Fiedler.
            </figcaption>
          </figure>
        </section>

        <section>
          <div className="section-title">
            The Solution
          </div>
          <h2>
            Let the app do the work
          </h2>

          <div className="split-layout">
            <div className="split-primary">
              <p>
                What started out as a short design sprint turned into experimenting with the APIs of the various systems to automate all of this process.
                We had in mind a simple interface, one that could work quickly on a phone, even if you were sick.
                You should be able to just enter in the dates and what you were out for, and the system could handle the rest.
              </p>
              <p>
                We adopted the name OOO (pronounced &ldquo;Triple-O&rdquo;) and got to work drawing up plans for an easy to read calendar and an efficient entry form.
                Things like PTO (Paid Time Off) have a lot more steps than WFH (Working from Home) or WFOO (Working from Other Office), and <mark>the app should be a helpful assistant, knowing just want to do</mark>.
              </p>
            </div>

            <div className="split-secondary">
              <img src="/source/images/case-studies/ooo-form.png" />
            </div>
          </div>

          <p>
            The calendar views serve as the dashboard of information, but also the starting point in entering new OOO time.
            The bars condense as much information as possible, combining people with the same status.
            This helps keep the calendar easy to scan, but also more naturally fits the question &ldquo;Who is on vacation next week?&rdquo;.
            <mark>We put a lot of thought into how a user might ask these sorts of questions</mark> and made sure that was reflected in the interface.
          </p>


          <figure>
            <img src="/source/images/case-studies/ooo-monthly.png" className="case-study-example" />
            <figcaption>
              Monthly calendar view with office picker
            </figcaption>
          </figure>

          <p>
            We discovered that there were really two different ways that someone looks for information on a calendar.
            One is where you are looking for an overview of the office activity, the second is when you are looking for specific information on one person.
            In this case, a weekly view is much more helpful.
            It wouldn't be common for someone to have more than one status per day, so that lets us use a much simpler bar interface to show each person on their own.
            Since we aren't combining people in the same Other Office status bars, we can be more helpful and display the specific office they would be in.
          </p>


          <figure>
            <img src="/source/images/case-studies/ooo-weekly.png" className="case-study-example" />
            <figcaption>
              A simpler weekly view to keep track of your team
            </figcaption>
          </figure>

          <div className="split-layout">
            <div className="split-primary">
              <p>
                My favorite feature is the success message.
                It may not look like much, but this little message reassures the user that everything was done and they can relax.
                Messaging like this would appear in the emails as well, always cordial and enthusiastic.
              </p>
              <p>
                <mark>I think our tools should be an extension of ourselves</mark>, and this is where the helpful assistant idea comes to life.
                As technologists we may be more optimistic about technology in general, but I think the world could use a lot more fun and friendly in their apps.
              </p>
            </div>

            <div className="split-secondary">
              <img src="/source/images/case-studies/ooo-complete.png" />
            </div>
          </div>
        </section>

        <section>
          <div className="section-title">
            In Summary
          </div>
          <h2>
            Take the time to solve your own problems
          </h2>
          <p>
            We were working on this project in our investment time on Fridays, so progress wasn't very fast.
            By the time we were ready to start diving into the back-end and wrangling APIs, a separate project for a unified scheduling system called Hub was beginning to take shape.
            The ideas from OOO were folded into Hub and improved the schedule view, which was much needed.
            Even though Hub is a much more useful and fully-featured application, I keep looking back at the much simpler philosophy of OOO and the helpfulness of our digital friend.
            If we can't use technology to solve our own problems, we can't very well use it to solve problems for others.
            <mark>Take some time to improve a process that annoys you</mark>, you might just get a new appreciation for what we do.
          </p>
        </section>
      </CaseStudy>
    );
  }
}

OOOCaseStudy.defaultProps = {
  title: "OOO",
  date: "2014/12/15",
  shortName: "ooo",
  role: "Design & Prototyping",
  preview: "/source/images/portfolio-ooo-screen.png",
  preview_type: "screen",
  icon: "/source/images/case-studies/ooo-icon.svg",
  summary: "This is a little something we experimented on at thoughtbot for Out of Office (OOO) notifications. We came up with a way to automate the hassle of telling your team you would be gone and made it much simpler. We ended up integrating many of these ideas and designs into our larger internal planning app, but I still love the way the original idea looked."
}

export default OOOCaseStudy;