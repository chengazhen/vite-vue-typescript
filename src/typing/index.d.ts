export interface response {
  status: number
  data?: any
  success?: string
  message?: string
}

declare global {
  interface Window {
    webkitRequestAnimationFrame: (callback: FrameRequestCallback) => number
    mozRequestAnimationFrame: (callback: FrameRequestCallback) => number
    oRequestAnimationFrame: (callback: FrameRequestCallback) => number
    msRequestAnimationFrame: (callback: FrameRequestCallback) => number
    mozCancelAnimationFrame: (handle: number) => void
    cancelRequestAnimationFrame: (handle: number) => void
  }
}