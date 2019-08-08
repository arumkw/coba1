import React from 'react';
import Lists from './lists.jsx';
// import SpanCustom from '../span.jsx';

const DetailImage = ({props_list,result,props_page_main, currentpage}) => {
    
    /*let json = [{
        id: 1,
        tanggal: '27 November 2017',
        event: '#39 JakartaJS April Meetup with kumparan',
        participant: '139 went'
    }, {
        id: 2,
        tanggal: '27 October 2017',
        event: '#38 JakartaJS April Meetup with BliBli',
        participant: '113 went'
    }, {
        id: 3,
        tanggal: '27 September 2017',
        event: '#37 JakartaJS April Meetup with Hactiv8',
        participant: '110 went'
    }]*/
    
    let resultZ = result;
    let json_filter = resultZ.filter(e => e.userName.toLowerCase().includes(props_list));

    let arrayNumber = [1,2,3,4,5,6,7,8,9];
    
    console.log("type of "+ typeof(currentpage))

    return (
        <div>
            <div className="Content2">
                <Lists
                    maping={json_filter} 
                />
            </div>
            {/* <div className="pagination">
                {arrayNumber.map((angka) =>
                    <SpanCustom
                        props_page={(e) =>  props_page_main(angka)}
                        value={angka}
                        classnm={angka === currentpage ? "active" : ""}
                    ></SpanCustom>
                    
                )}
            </div> */}
        </div>

    )
}

export default DetailImage;