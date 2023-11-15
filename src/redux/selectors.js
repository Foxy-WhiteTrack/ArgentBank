import { createSelector } from '@reduxjs/toolkit'

const profile = createSelector(
    [(state) => state.user],
    (user) => user.profile
)

const UserSelectors = {
    profile
}

export default UserSelectors