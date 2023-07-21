import Header from './Header'
import Menu from './Menu'
import Breadcrumb from './Breadcrumb'
import Content from './Content'


export default function Layout() {
    return (
        <div className="bg-gray-100 h-full w-auto flex flex-row">
            <Menu></Menu>
            <div className="flex flex-col w-full">
                <Header></Header>
                <Breadcrumb></Breadcrumb>
                <Content></Content>
            </div>
        </div>
    )
}