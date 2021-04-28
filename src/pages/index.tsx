import { RecordButton } from '../components/animations'
import BouncyText from '../components/animations/bouncyText'

export const Home = (): JSX.Element => (
  <div className="h-full flex flex-col items-center justify-center">
    <div className="h-28 w-1/6">
      <BouncyText text="Cory Ball" />
    </div>
    <div className="h-24 w-24">
      <RecordButton />
    </div>
  </div>
)

export default Home
