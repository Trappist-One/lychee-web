
export default function Logo(prop) {

    const style = {
        width: prop.size + 'px',
        height: prop.size + 'px'
    }
    
    return (<>
        <img src="assets/icons/logo.svg" style={style} className="cursor-pointer">
        </img>
    </>)
}