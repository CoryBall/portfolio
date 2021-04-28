import * as React from 'react'
import { AppContextPropsType } from './helpers'

export type AppProviderProps = {
  children: React.ReactNode
}

export const AppContext = React.createContext<AppContextPropsType>({
  loading: false,
  setLoading: () => {
    return
  },
})

export const AppProvider = (props: AppProviderProps): React.ReactElement => {
  const { children } = props
  const [loading, setLoading] = React.useState<boolean>(false)

  return (
    <AppContext.Provider
      value={{
        loading,
        setLoading,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useApp = (): AppContextPropsType => React.useContext(AppContext)
export default useApp
