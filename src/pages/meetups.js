import React from "react"
import { Title } from "react-head"
import styled from "styled-components"

import Stat from "@modules/Stats"

import MeetupCountries from "@modules/Layouts/MeetupCountries"

import { meetupsData } from "@modules/Data/meetups_data"

import {
  IntroHeader,
  IntroHeaderHighlight,
  IntroContent,
} from "@modules/ui/styles/Header.styles"

const {doughnutData} = meetupsData;

const MeetupsSection = styled(Stat.Section)`
  padding-top: 3rem; 
`

const Meetups = () => {
  return (
    <>
      <Title>MakerDAO Community - Development Grants</Title>
      {/* Primary Stats Section */}
      <IntroHeader>
        We've brought together{" "}
        <IntroHeaderHighlight>
          {meetupsData.totalNumberReportedAttendees}
        </IntroHeaderHighlight>{" "}
        people since February 2018.
      </IntroHeader>
      <IntroContent>
        MakerDAO’s Core Community Development Initiative supports virtual and physical
        meetups to help anyone interested learn about Ethereum, DeFi, and
        MakerDAO.
      </IntroContent>
      <MeetupsSection>
        <Stat.Row>
          <Stat
              number={meetupsData.totalNumberCountries}
              description="Total Number of Countries"
            />
        </Stat.Row>
        <MeetupCountries/>
      
        <Stat.Row>
          <Stat
            number={meetupsData.totalNumberReportedAttendees}
            description="Total Attendees"
          />
          <Stat
            number={meetupsData.averageNumberMeetupsPerMonthThisYear}
            description="Avg. Meetups per Month"
          />
          <Stat
            number={meetupsData.averageNumberAttendeesPerMonthThisYear}
            description="Avg. Attendees per Month"
          />
        </Stat.Row>

        <Stat.Row>
          <Stat
            number={meetupsData.totalNumberMeetups}
            description="Total Meetups"
          />
          <Stat.DoughnutChart
            data={doughnutData}
            width={200}
            height={200}
            options={{
              maintainAspectRatio: true,
              responsive: true,
            }}
          />
          <Stat
            colorOrange
            number={meetupsData.applicationsSubmitted}
            description="Meetup Applications Submitted"
          />
        </Stat.Row>

        <Stat.Row justifyContent="center">
          <Stat
            number={meetupsData.totalNumberUniqueHosts}
            description="Number of Unique Hosts"
          />
          <Stat
            number={meetupsData.totalNumberRepeatHosts}
            description="Number of Repeat Hosts"
          />
        </Stat.Row>
      </MeetupsSection>
    </>
  )
}

export default Meetups