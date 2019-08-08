import React from 'react';
import '../../main.css'
import DetailImage from './detailImage.jsx'
import axios from 'axios'
import Avatar from '@material-ui/core/Avatar'
import ListStory from './listStory'

export default class Content extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          propsan_bro: "",
          result:[],
          pageNow: 1,
          halaman: 1
        }
      }
    
      componentWillMount() {
        this.fetching(1);
        console.log('Aku will mount');
      }
    
      fetching(def=1){
        let opt={
          method:'GET',
          //url:this.state.next
          // url:`https://swapi.co/api/people/?page=${def}`
          url:'https://my-json-server.typicode.com/arumkw/API_for_task/posts'
        }
        axios(opt)
        .then(({data}) => {
          this.setState({
            result: data,
            pageNow: def
          });
        })
        .catch(error => {
          console.log(error)
        })
      }
    
      setThePage(newPage){
        this.fetching(newPage)
      }

    render() {
        return (
            <div className = 'Content'>
                <section className='Section-Left'>
                    <DetailImage 
                        props_list={this.state.propsan_bro}
                        result={this.state.result}
                        props_page_main={(e) => this.setThePage(e)}
                        currentpage={this.state.pageNow}
                    ></DetailImage>
                </section>
                <section className='Section-Right'>
                  <div className='first-row'>
                    <Avatar alt="Avatar" src='https://icon-icons.com/icons2/582/PNG/512/girl_icon-icons.com_55043.png' style={{width:60, height:60, marginRight:20}}/>
                    <div style={{height:'30px'}}>
                      <p style={{marginBlockStart:'8px'}}><b>Orriku</b><br />Arum Kusuma Wardani</p>
                      <p></p>
                  </div>
                  </div>
                  <div className='second-row'>
                  <ListStory />
                  </div>
                </section>
            </div>
        )
    }
}