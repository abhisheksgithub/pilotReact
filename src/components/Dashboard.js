import React from 'react'

export default class Dashboard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userDetails: [],
            editName: { name: "" }
        }
    }

    deleteMe = (id) => {
        this.setState({ userDetails : this.state.userDetails.filter(item => item.id !== id )})
    }

    editMe = (id) => {
        const findData = this.state.userDetails.find(item => item.id == id)
       // console.log("FindData", findData)
        this.setState({ editName : findData},)
    }

    
    saveEditData = (id) => {
        const oldData = this.state.userDetails.find(item => item.id == this.state.editName.id)
        const newName = this.state.editName.name;

        const data = this.state.userDetails.map(item => {
            if (item.id === oldData.id) {
                return {...item, name: newName};
              } else {
                return item;
              }
        });

        this.setState({ userDetails: data })
    }

    handleChange = (evt) => {
        this.setState({ editName: {...this.state.editName, name: evt.target.value }})
    }

    componentDidMount() {
        // GET, POST, PUT, DELETE
        fetch('https://jsonplaceholder.typicode.com/users').then(response => {
           //  console.log(response.json())
            return response.json()
        })
            .then(data => { 
                this.setState({ userDetails: data })
            })
    }

    render() {
        return (
            <>
                <div><h2>My User Details</h2></div>
                <div>
                    <input type="text" value={this.state.editName.name} onChange={(evt)=>{ this.handleChange(evt) }}/>
                    <button onClick={() => { this.saveEditData(this.state.editName.editId) }} >Save</button>
                </div>
                <div><ul>{this.state.userDetails.map(item => {
                    return <li key={item.id}>
                        {item.name} <br/> {item.website} 
                        <button onClick={() => { this.deleteMe(item.id) }}>Delete</button>
                        <button onClick={() => { this.editMe(item.id) }} >Edit</button>
                    </li>
                })
                }</ul></div>
            </>
        )
    }
};


// Mounting, Updating, Unmounting