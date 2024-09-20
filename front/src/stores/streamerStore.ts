import { defineStore } from 'pinia'

interface Streamer {
  id: string
  name: string
  pseudo: string
  tier: string
  rank: string
  leaguePoints: number
  wins: number
  losses: number
  winrate: number
  twitchLink: string
  twitter: string
}

export const useStreamerStore = defineStore('streamer', {
  state: () => ({
    streamers: [] as Streamer[]
  }),
  actions: {
    async fetchStreamers() {
      try {
        const response = await fetch('http://localhost:3000/streamers', {
          method: 'GET',
          credentials: 'include',
        })

        if (response.ok) {
          this.streamers = await response.json()
        } else {
          console.error('Error fetching streamers:', response)
        }
      } catch (error) {
        console.error('Error fetching streamers:', error)
      }
    }
  }
})