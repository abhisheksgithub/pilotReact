import React from 'react'
import "./photoEdit.css"
import { connect } from 'react-redux'


const style = {
    margin: {
        margin: '10px'
    }
}

class EditPhoto extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            editPhoto: {}
        }
    }

    componentDidMount() {
        const { id } = this.props.match.params
        let filteredPhoto = this.props.photoDetails.find(item => item.id == id)
        this.setState({ editPhoto: filteredPhoto })
    }

    handleChange = (evt) => {
       this.setState({editPhoto:{...this.state.editPhoto, [evt.target.name]:evt.target.value}})
       }
   
    handleClick = () => {
        console.log(this.state.editPhoto)
        this.props.updatePhoto(this.state.editPhoto)
        this.props.history.push("/photos");
       }

    render() {
        return (
            <div> 
                <img style={style.margin} src={this.state.editPhoto.thumbnailUrl} alt={this.state.editPhoto.thumbnailUrl}></img> 
                <div style={style.margin}><input type='text' name='title' placeholder="title" value={this.state.editPhoto?.title} onChange={this.handleChange}/></div>
                <div style={style.margin}><input type='text' name='albumId' placeholder="albumId" value={this.state.editPhoto?.albumId} onChange={this.handleChange}/></div>
                <div style={style.margin}><input type='button' value="Save" onClick={()=>{this.handleClick()}}/></div>
            </div>
     
        )
    }
};


const mapStateToProps = state => ({
    photoDetails : state.photoDetails,
})

const mapDispatchToProps = dispatch => ({
    updatePhoto : (val) => { dispatch({
        type: 'EDIT_PHOTO',
        payload: val
    })}
})

 export default connect(mapStateToProps,mapDispatchToProps)(EditPhoto)