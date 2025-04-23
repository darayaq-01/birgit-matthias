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