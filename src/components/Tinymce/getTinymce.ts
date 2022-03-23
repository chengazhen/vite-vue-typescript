import type { EditorManager } from './tinymce'

const getGlobal = (): any => (typeof window !== 'undefined' ? window : global)

export const getTinymce = (): EditorManager | null => {
  const global = getGlobal()

  return global && global.tinymce ? global.tinymce : null
}
