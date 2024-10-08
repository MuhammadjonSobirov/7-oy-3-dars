import { Link } from "react-router-dom";
import leftButton from "../assets/Group 24.svg"
import rightButton from "../assets/Group 23.svg"

const Render = ({ data = [] }) => {

    return (
        <ul className="flex justify-between items-center mt-8">
            <li><button><img src={leftButton} alt="" /></button></li>
            {typeof data === 'object' && data.length > 0  && data.map(post => {
                return (
                    <Link to={`/seance/${post.id}`} key={post.id}>
                        <li key={post.id}>
                            <div className="w-[280px] h-[400px] rounded-[10px] mb-2"><img className="w-full h-full rounded-[10px]" src={post.img} alt="" /></div>
                            <h4>{post.title}</h4>
                            <p>Комедия, Фэнтези</p>
                        </li>
                    </Link>
                )
            })
            }
            <li><button><img src={rightButton} alt="" /></button></li>
        </ul>
    )
}

export default Render