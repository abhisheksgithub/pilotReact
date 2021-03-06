import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Photos extends React.Component {
    componentDidMount() {
        if(this.props.userPhotos.length === 0){
            fetch('https://jsonplaceholder.typicode.com/photos').then(response => response.json())
            .then(data => {
              this.props.photoDetailUpdate(data)
            })
        }
      }

    render() {
        console.log(">>>> photo componnet >>>>", this.props.userPhotos)
        return (
            <div>
                <h3>User comment Details - photo</h3> 
                {this.props.userPhotos.map((item, index) => { 
                     return (
                         <div style={{display: "inline", width: "50px", margin: "15px"}}> 
                             <Link to={`/photos/editPhoto/${item.id}`}><img src={item.thumbnailUrl} alt={item.thumbnailUrl}></img></Link>
                             <div> {item.title}</div>
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

const mapDispatchToProps = dispatch => { return { photoDetailUpdate: (val) => dispatch({type: 'ADD_PHOTOS', payload: val})}}

export default connect(mapStateToProps, mapDispatchToProps)(Photos)