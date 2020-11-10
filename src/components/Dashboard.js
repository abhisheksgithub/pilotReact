import React from 'react'
import GridLayout from './GridLayout'
import { connect } from 'react-redux'

class Dashboard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            editName: { name: "" }
        }
    }

    deleteMe = (id) => {
        console.log("----> ", id)
      // this.setState({ userDetails : this.state.userDetails.filter(item => item.id !== id )})
      this.props.userDelete({id: id})
      
    }

    editMe = (id) => {
        const findData = this.props.userData.find(item => item.id == id)
        this.setState({ editName : findData})
    }

    
    saveEditData = (id) => {
        this.props.userNameUpdate({ id: this.state.editName.id, name: this.state.editName.name})
    }

    handleChange = (evt) => {
        this.setState({ editName: {...this.state.editName, name: evt.target.value }})
    }


    render() {
        console.log(this.props, 'userData')
        return (
            <>
                <div><h2>My User Details</h2></div>
                <div>
                    <input type="text" value={this.state.editName.name} onChange={(evt)=>{ this.handleChange(evt) }}/>
                    <button onClick={() => { this.saveEditData(this.state.editName.editId) }} >Save</button>
                </div>
                <div><ul>{this.props.userData.map((item, ind) => {
                    return <GridLayout key={ind} item={item} deleteMe={this.deleteMe} editMe={this.editMe}/>
                })
                }</ul></div>
            </>
        )
    }
};

const mapStateToProps = state => ({
    userData: state.userDetails ? state.userDetails : [],
    state: state
})

const mapDispatchToProps = dispatch => ({
    userNameUpdate: (val) => dispatch({ type: 'UPDATE_USERNAME', payload: val }),
    userDelete: (val) => dispatch({ type: 'DELETE_USERNAME', payload: val }),

})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)

// Mounting, Updating, Unmounting