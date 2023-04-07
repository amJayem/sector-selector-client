import React, { useState } from 'react'
import Modal from '../components/Modal'
import SectorsData from '../components/sectorsData'
import UserData from '../components/UserData'
import useSelectorContext from '../Hooks/useSelectorContext'

const Home = () => {
  const { state } = useSelectorContext()
  const [userInfo, setUserInfo] = useState(null)
  const selector = state.selector
  const user_data = state.user_data
  // console.log(user_data);
  // console.log(userInfo);
  return (
    <div>
      {selector.map((item) => (
        <SectorsData key={item} item={item} />
      ))}
      <div>
        <UserData user_data={user_data} setUserInfo={setUserInfo} />
      </div>
      {userInfo && <Modal user={userInfo}></Modal>}
    </div>
  )
}

export default Home
