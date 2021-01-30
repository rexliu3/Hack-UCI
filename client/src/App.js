import React, {useEffect, useState} from 'react';
import firebase from './firebase/index'

const App = () => {
  const [users, setUser] = useState([])
  const initstate = { firstName: '', 
                    lastName: '', 
                    age: '', 
                    gender: '', 
                    phoneNumber: '', 
                    email: '', 
                    medicalConditions: '',
                    wapScore: '',
                    pastApplications: ''
}
  const [inputs, setInputs] = useState(initstate)

    useEffect( () => {
        getUsers()
    }, [])

    const getUsers = () => {
      firebase.db.collection('covid-19 vaccine queue').get()
        .then(querySnapshot => {
        querySnapshot.forEach( doc => {
          //prints the data in the database to the console
          console.log(`${doc.id} => ${JSON.stringify(doc.data())}`)
          setUser(prev => ([...prev, doc.data()]))
        })
      })
      .catch(err => {
        console.log(err.message)
      })
    }


    const sendUserInfo = async (e) => {
      e.preventDefault()
      await firebase.db.collection('covid-19 vaccine queue').add(inputs)
      .then( async documentReference => {
        console.log('User ID', documentReference.id)
        await setUser([])

        getUsers()
      })
      .catch(error => {
        console.log(error.message)
      })
  }

  const handleChange = e => {
    const {name, value} = e.target
    setInputs(prev => ({...prev, [name]: value}))
  }

  // const readData = () => {
  //   firebase.dbdb.collection("queue").get().then((querySnapshot) => {
  //     querySnapshot.forEach((doc) => {
  //         console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
  //     });
  //   });
  // }

  return (
    <div>
      <h1>Covid-19 Vaccine Application</h1>
        <form onSubmit={sendUserInfo}>
          <input name='firstName'
            placeholder="John" 
            value={inputs.firstName}
            onChange={handleChange}/>
          <input 
            name='lastName'
            value={inputs.lastName} 
            placeholder="Smith" 
            onChange={handleChange}/>
            <button>Submit</button>
        </form>
        {/* {users.length === 0 ? <p></p> : users.map(user => console.log(user.firstName)) } */}
    </div>
  );
};

export default App;
