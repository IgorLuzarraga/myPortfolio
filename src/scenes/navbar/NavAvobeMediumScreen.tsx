import ShowPagesLinks from '../../components/ShowPagesLinks'
import { SelectedPage } from '../../types/appType'

type Props = {
    selectedPage: SelectedPage,
    setSelectedPage: (value: SelectedPage) => void
}

const NavAvobeMediumScreen = ({ selectedPage, setSelectedPage }: Props) =>
    <div className="flex gap-16 font-opensans text-lg text-purple-300 font-semibold">
        <ShowPagesLinks selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
    </div>

export default NavAvobeMediumScreen