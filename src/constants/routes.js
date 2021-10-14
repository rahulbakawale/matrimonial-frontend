import verifymobile from "components/verifymobile/verifymobile";

export const AppRoutes = {
    ROOT: "/",
    HOME: "/home",
    COMPLETE:  "/complete-step",
    VERIFYMOBILE: '/verifymobile',
    UPDATEUSER: "/updateUser",
    PARENTSINFO: "/parents-info",
    SIBLINGS: '/siblings',
    PARTNER_PREFERENCE: '/partner-preference',
    PROFILES: "/profiles",
    QUALIFICATIONS: "/qualifications",
    OCCUPATION: "/occupations", 
    DOCUMENTS: "/documents",
    USERSETTING: "/user-setting",
    SEARCH_PROFILE: "/search-profile",
    FAVORITE_PROFILE: "/favorite-profile",
    NOTIFICATION: "/notification",
    BASIC_DETAILS: '/updateUser',
    IMAGE:          '/',
    SIBLING: (id) => `/sibling/${ id }`,
    ADD_SIBLING: '/add-siblings'

}
