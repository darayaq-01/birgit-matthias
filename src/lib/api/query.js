export const nextEventQuery = `
query MyQuery {
  nextEvent {
    title
    venue
    dateEvent
    description {
      value
    }
    linkEvent {
      value
    }
  }
}`

export const descriptionQuery = `
query MyQuery {
  description {
    descriptionContent {
      value
    }
  }
}
`

export const dataQuery = `
query MyQuery {
  ueberMich {
    id
    title
    description {
    value
    }
   
  }
}
`

export const videoQuery = `
query MyQuery {
  videoSection {
    id
    videoArtist {
      video {
        muxPlaybackId
        streamingUrl
      }
    }
  }
}
`

export const ausstellungQuery = `
query MyQuery {
  ausstellungen {
    title
    list {
      value
    }
    title2
    list2 {
      value
    }
      einzelausstellungen {
      value
    }
  }
}`