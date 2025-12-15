/* eslint-disable no-console */
// todo: add proper logging methods / framework
import { add, endOfWeek, format, startOfWeek } from 'date-fns'
import fs from 'fs'
import querystring from 'node:querystring'
const config = JSON.parse(fs.readFileSync('./data/calendar-config.json'))
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

  if (!team.vvId) {
    console.error(`No vv id for`, team)
    throw new Error('No vvie')
  }

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
          '3f0441e6723b9852b4f0cff2c872f4aa674c5de2d23589efc70c7a4ffb7f6383',
      },
    }),
  }
  const queryParams = querystring.stringify(params)
  const fetchUrl = `${url}?${queryParams}`
  console.log('fetchUrl', fetchUrl)

  const resp = await fetch(fetchUrl, { method: 'GET', headers })
  const data = await resp.json()
  if (data.errors) {
    console.error('VV Error response', data.errors)
    throw new Error('VV Error response')
  }
  console.log('resp', data)
  vvResponse.teamCalendar[`${team.vvId}`] = sortById(data.data.teamCalendar)
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
          'ace90f0250b37a504282e27289c62ea6a3f444ef8821f663bd1faa8e3689e358',
      },
    }),
  }
  const queryParams = querystring.stringify(params)
  const fetchUrl = `${url}?${queryParams}`
  console.log('fetchUrl', fetchUrl)
  const resp = await fetch(fetchUrl, { method: 'GET', headers })
  const data = await resp.json()
  // console.log('resp', data)
  if (data.errors) {
    console.error('VV Error response for ', fetchUrl, data.errors)
    throw new Error('VV Error response')
  }
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
        'eeeb92967d0b593c29f321f717ab2d81179bad5e1efce80a963a7d1ef4fabb41',
    },
  }),
}
const queryParams = querystring.stringify(params)
const fetchUrl = `${url}?${queryParams}`
console.log('fetchUrl', fetchUrl)
const resp = await fetch(fetchUrl, { method: 'GET', headers })
const data = await resp.json()
console.log('resp', data)
if (data.errors) {
  console.error('VV Error response for ', fetchUrl, data.errors)
  throw new Error('VV Error response')
}

vvResponse.clubMatchesAssignations = sortById(data.data.clubMatchesAssignations)

fs.writeFileSync('./data/vv-responses.json', JSON.stringify(vvResponse))

function sortById(jsonArray) {
  // Sorting the array based on the 'id' property
  return jsonArray.sort((a, b) => {
    if (Number(a.id) < Number(b.id)) {
      return -1
    }
    if (Number(a.id) > Number(b.id)) {
      return 1
    }
    return 0 // equal ids
  })
}
