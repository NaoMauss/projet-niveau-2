import { setActivePinia, createPinia } from 'pinia'
import { useStreamerStore } from '../streamerStore'
import { beforeEach, describe, it, expect, vi } from 'vitest'

describe('Streamer Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('fetches streamers successfully', async () => {
    const store = useStreamerStore()
    const mockStreamers = [{ id: '1', name: 'Test Streamer', /* ... autres propriétés */ }]

    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(mockStreamers),
    })

    await store.fetchStreamers()

    expect(store.streamers).toEqual(mockStreamers)
  })

  it('handles fetch error', async () => {
    const store = useStreamerStore()
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {})

    global.fetch = vi.fn().mockRejectedValue(new Error('Fetch error'))

    await store.fetchStreamers()

    expect(store.streamers).toEqual([])
    expect(consoleSpy).toHaveBeenCalledWith('Error fetching streamers:', expect.any(Error))

    consoleSpy.mockRestore()
  })
})