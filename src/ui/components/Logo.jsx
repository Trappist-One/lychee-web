
export default function Logo(prop) {

    const style = {
        width: prop.size + 'px',
        height: prop.size + 'px'
    }

    console.log(style);

    return (<>
        <img src="assets/icons/logo.svg" style={style} className="cursor-pointer">
        </img>
    </>)
}