import button from '../../../../assets/freedi/Button.svg'
import './flist.scss'
type Props = {
  name: string,
  profile: string,
  role: string
}

const Flist = ({name, profile, role}: Props) => {
  return (
    <div className='l-container'>
        <div className="profile">
          <div className="prof-container">
            <img src={profile} alt="profile image" className='prof-img' />
          </div>
        </div>
        <div className="l-text">
            <div className="l-name">
              <p className='list-name'>{name}</p>
            </div>
            <div className="l-role">
              <p className='role'>{role}</p>
            </div>
        </div>
        <div className="f-button">
          <img src={button} alt='button' />
        </div>
    </div>
  )
}

export default Flist