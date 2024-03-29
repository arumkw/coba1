import React, {useState} from 'react'
// import ButtonCustom from '../button.jsx';
import './lists.css'
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import { textAlign } from '@material-ui/system';

const useStyles = makeStyles({
    avatar: {
      marginLeft:10,
      marginRight:10,
      border: 5
    }
  });

  

const Lists = ({maping}) => {

    const imagesPath = {
        kosong: "images/baseline_favorite_border_black_18dp.png",
        isi: "images/baseline_favorite_black_18dp.png",
      }

    const [state1, setstate1] = useState(true)

    const toogleImage = () => {
        setstate1(!state1)
        console.log(state1)
        console.log('lawannya ',!state1)
    }

    const getImageName = () => state1 ? 'kosong' : 'isi'
    
    const classes = useStyles();

    if (maping.length === 0){
        return (
            <div className='loading'>
                {/* <img className='loading-gif' src='https://kuis.football5star.com/images/ajax4.gif' alt=""/> */}
                <img className='loading-gif' src='https://media.giphy.com/media/l4pTovXEp3vC1YBvW/giphy.gif' alt=""/>
            </div>
        )
    }
    return (
        <div className='lists-card'>
            {maping.map((item, idx) => {
                return (
                    <div key={idx} className='list-card'>
                        <div className='mini-profile'>
                            <Avatar alt="Avatar" src={item.profile_picture} className={classes.avatar} />
                            <div style={{height:'30px', marginTop:'8px'}}>{item.userName}</div>
                        </div>
                        <hr />
                        <img className='face-image' src={item.recent_post} alt=""/>
                        <div>
                            <img style={{maxWidth: '40px', margin:'0px'}} src={imagesPath[getImageName()]} onClick={()=>toogleImage()}/>
                        </div>

                        {/* <i className="material-icons md-48" onClick={()=>toogleImage()}>favorite</i> */}

                        <div>Gender : {item.gender}<br /><br /></div>
                        <div>Eye Color : {item.eye_color}<br /><br /></div>
                        {/* <ButtonCustom
                            color='#801336'
                            value={'View'}
                        /> */}
                    </div>
                )
            })}
        </div>
    )
}

export default Lists;