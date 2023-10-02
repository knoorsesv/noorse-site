/* eslint-disable no-console */
// todo: add proper logging methods / framework
import { add, endOfWeek, format, startOfWeek } from 'date-fns'
import fs from 'fs'
import querystring from 'node:querystring'
const config = JSON.parse(fs.readFileSync('./data/calendar-config.json'))
// console.log('config', config)
const url = 'https://datalake-prod2018.rbfa.be/graphql'

const headers = new Headers()

headers.append('Content-Type', 'application/json')

const vvResponse = {
  teamCalendar: {},
  teamSeriesAndRankings: {},
  clubMatchesAssignations: {},
}

const clubId = '8179'
const endDayOfWeek = format(
  endOfWeek(add(new Date(), { days: 1 }), { weekStartsOn: 2 }),
  'yyyy/MM/dd'
)
const startDayOfWeek = format(
  startOfWeek(new Date(), { weekStartsOn: 1 }),
  'yyyy/MM/dd'
)
const startDate = startDayOfWeek
const endDate = endDayOfWeek

for (const team of config) {
  console.log('team.vvId', team.vvId)

  const params = {
    operationName: 'GetTeamCalendar',
    variables: JSON.stringify({
      teamId: team.vvId,
      language: 'nl',
      sortByDate: 'asc',
    }),
    extensions: JSON.stringify({
      persistedQuery: {
        version: 1,
        sha256Hash:
          '63e80713dbe3f057aafb53348ebb61a2c52d3d6cda437d8b7e7bd78191990487',
      },
    }),
  }
  const queryParams = querystring.stringify(params)
  const fetchUrl = `${url}?${queryParams}`
  console.log('fetchUrl', fetchUrl)

  const resp = await fetch(fetchUrl, { method: 'GET', headers })
  const data = await resp.json()
  console.log('resp', data)
  vvResponse.teamCalendar[`${team.vvId}`] = data.data.teamCalendar
}

for (const team of config) {
  console.log('team.vvId', team.vvId)

  const params = {
    operationName: 'getSeriesAndRankingsQuery',
    variables: JSON.stringify({
      teamId: team.vvId,
      language: 'nl',
      sortByDate: 'asc',
    }),
    extensions: JSON.stringify({
      persistedQuery: {
        version: 1,
        sha256Hash:
          '4ced37c1f12101a450402b274c6a3e49e1722751ba5468f5a70411ffbabdbd7f',
      },
    }),
  }
  const queryParams = querystring.stringify(params)
  const fetchUrl = `${url}?${queryParams}`
  console.log('fetchUrl', fetchUrl)
  const resp = await fetch(fetchUrl, { method: 'GET', headers })
  const data = await resp.json()
  // console.log('resp', data)
  vvResponse.teamSeriesAndRankings[`${team.vvId}`] =
    data.data.teamSeriesAndRankings
}

const params = {
  operationName: 'clubMatchesAssignations',
  variables: JSON.stringify({
    clubId,
    language: 'nl',
    startDate,
    endDate,
    hasLocation: true,
  }),
  extensions: JSON.stringify({
    persistedQuery: {
      version: 1,
      sha256Hash:
        'ae7ac199b18b57747ba6e3a8c26a19e022ac3f201508e28836bbeb9f8bd831be',
    },
  }),
}
// {"persistedQuery":{"version":1,"sha256Hash":"ae7ac199b18b57747ba6e3a8c26a19e022ac3f201508e28836bbeb9f8bd831be"}}
const queryParams = querystring.stringify(params)
const fetchUrl = `${url}?${queryParams}`
console.log('fetchUrl', fetchUrl)
const resp = await fetch(fetchUrl, { method: 'GET', headers })
const data = await resp.json()
console.log('resp', data)
vvResponse.clubMatchesAssignations = data.data.clubMatchesAssignations

fs.writeFileSync('./data/vv-responses.json', JSON.stringify(vvResponse))
