import React from 'react'
import ContactReqList from '../../components/contact-requests/ContactReqList'
import ProfileDetails from '../../components/ProfileDetails'

const Profile = () => {
  return (
    <div className="flex">
        <div className="flex grid">
            <img className="m-4 h" src="https://images.indianexpress.com/2022/04/newsline-hccreche-3col.jpeg?w=389" />
            <ProfileDetails />
        </div>
        <div>
        <ContactReqList />
        <div className="flex grid-row gap-8 p-4">
        <div>
            <div className="flex grid bg-pink-secondary p-4 rounded-lg text-center">
                <div className="text-6xl font-extrabold p-4">50</div>
                <div className="text-3xl font-bold pb-4">Total kids registered with the creche</div>
            </div>
        </div>
        <div>
            <div className="flex grid bg-pink-secondary p-4 rounded-lg text-center">
                <div className="text-6xl font-extrabold p-4">78</div>
                <div className="text-3xl font-bold pb-4">Total customer feedbacks submitted</div>
            </div>
        </div>
        </div>
      
        </div>
        
    </div>
  )
}

export default Profile