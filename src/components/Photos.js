import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Photos extends React.Component {

    render() {
        console.log(">>>> photo componnet >>>>", this.props.userPhotos)
        return (
            <div>
                <h3>User comment Details - photo</h3> 
                {this.props.userPhotos.map((item, index) => { 
                     return (
                         <div> 
                             <Link to={`/photos/editPhoto/${item.id}`}><img src={item.thumbnailUrl} alt={item.thumbnailUrl}></img></Link>
                             <div> Photo Title: {item.title}</div>
                             <div> Album Id: {item.albumId} </div>
                         </div>
                     )
                })}
            </div>
        )
    }
};

const mapStateToProps = state => ({
    userPhotos: state.photoDetails ? state.photoDetails : []
})

export default connect(mapStateToProps)(Photos)