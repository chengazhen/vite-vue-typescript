export const setData = (key: string, value: string) => {
  sessionStorage.setItem(key, value)
}

export const getData = (key: string): string | null => {
  return sessionStorage.getItem(key)
}
