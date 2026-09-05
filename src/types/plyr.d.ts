declare module 'plyr' {
  export type PlyrSource = {
    type: 'video' | 'audio'
    title?: string
    sources: Array<{
      src: string
      provider?: 'youtube' | 'vimeo' | 'html5'
      type?: string
    }>
  }

  export type PlyrOptions = {
    controls?: string[] | Element
    clickToPlay?: boolean
    hideControls?: boolean
    autoplay?: boolean
    muted?: boolean
    volume?: number
    keyboard?: { focused?: boolean; global?: boolean }
    tooltips?: { controls?: boolean; seek?: boolean }
    youtube?: Record<string, string | number | boolean>
    listeners?: Record<string, unknown>
  }

  export default class Plyr {
    constructor(target: string | Element, options?: PlyrOptions)
    get playing(): boolean
    get currentTime(): number
    set currentTime(value: number)
    get duration(): number
    get source(): PlyrSource
    set source(value: PlyrSource)
    play(): Promise<void> | void
    pause(): void
    stop(): void
    destroy(): void
    on(
      event: string,
      callback: (event?: { detail?: { plyr?: Plyr } }) => void
    ): void
    once(
      event: string,
      callback: (event?: { detail?: { plyr?: Plyr } }) => void
    ): void
    off(
      event: string,
      callback: (event?: { detail?: { plyr?: Plyr } }) => void
    ): void
  }
}

declare module 'plyr/dist/plyr.css'
