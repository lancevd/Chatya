import React, { useEffect } from 'react'
import { useChartStore } from '../store/useChartStore';

const Sidebar = () => {
    const {users, getUsers, selectedUser, setSelectedUser, isUserLoading} = useChartStore();
    const onlineUsers = [];

    useEffect(()=> {
        getUsers();
    },[getUsers])

    if (isUserLoading) {
        return <div>Loading...</div>
    }
  return (
    <div>Sidebar</div>
  )
}

export default Sidebar