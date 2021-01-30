import React, {useEffect, useState} from 'react';
import firebase from './firebase/index'

const App = () => {
  const [users, setUser] = useState([])
  const initState = { firstName: '', lastName: ''}
  const [inputs, setInputs] = useState(initState)

  console.log(firebase.db)

  useEffect( () => {
      getUsers()
  }, [])

  const getUsers = () => {
    firebase.db.collection('Covid-19 Priority Queue').get()
      .then(querySnapshot => {
      querySnapshot.forEach( doc => {

      setUser(prev => ([...prev, doc.data()]))
      })
    })
    .catch(err => {
      console.log(err.message)
    })
  }


  const sendUserInfo = async (e) => {
    e.preventDefault()
    await firebase.db.collection('Covid-19 Priority Queue').add(inputs)
    .then( async documentReference => {
      console.log('user ID', documentReference.id)
      await setUser([])

      getUsers()
    })
    .catch(error => {
      console.log(error.message)
    })

  }

  const handleChange = e => {
    const {name, value} = e.target
    setInputs(prev => ( {...prev, [name]: value} ))
  }

  return (
    <div>
      <h1>Submit User Info</h1>
        <form onSubmit={sendUserInfo}>
          <input name='First Name'
            placeholder="John" 
            value={inputs.firstName}
            onChange={handleChange}/>
          <input 
            name='Last Name'
            value={inputs.lastName} 
            placeholder="Smith" 
            onChange={handleChange}/>
            <button>Submit</button>
        </form>
    </div>
  );
};

export default App;