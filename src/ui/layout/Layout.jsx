import Header from './Header'
import Silder from './Silder'
import Breadcrumb from './Breadcrumb'
import Content from './Content'


export default function Layout() {
    return (
        <div className="bg-gray-100 h-full w-auto flex flex-row">
            <Silder></Silder>
            <div className="flex flex-col w-full">
                <Header></Header>
                <Breadcrumb></Breadcrumb>
                <Content></Content>
            </div>
        </div>
    )
}