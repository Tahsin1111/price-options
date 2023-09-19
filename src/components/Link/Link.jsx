

const Link = ({route}) => {
    return (
        <li className="mr-6" >
        <a href={`route.path`}>{route.name}</a>
    </li>)
    ;
};
// Link.protoTypes ={
//     route: PropTypes.object
// }
export default Link;