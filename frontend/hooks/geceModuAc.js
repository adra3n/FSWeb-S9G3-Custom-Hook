import localStorageKullan from './localStorageKullan'

const geceModuAc = (initialState) => {
  const [darkMode, setDarkMode] = localStorageKullan('darkMode', initialState)

  return [darkMode, setDarkMode]
}

export default geceModuAc
