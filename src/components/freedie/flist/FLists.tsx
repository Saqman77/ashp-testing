import { freedie } from '../freedyContent'
import Flist from './list/Flist'
import './flists.scss'

interface ListProps {
  onItemClick: (index: number) => void;
}

const FLists: React.FC<ListProps> = ({ onItemClick }) => {
  return (
    <div className="lists-wrapper">
      <ul className='f-ul'>
        {freedie.map((list, index) => {
          return(
            <li key={list.id} onClick={() => onItemClick(index)}>
              <Flist
                
                name={list.name}
                profile={list.imgSrc}
                role={list.role}
              />
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default FLists