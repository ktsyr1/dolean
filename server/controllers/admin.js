import Courses from "../models/Courses.js"
import DefCourses from "../models/DefCourses.js"
import User from "../models/User.js"
import UserDetails from "../models/UserDetails.js"


export const AdminStates = async (req, res) => {
    // console.log(req.query.id);
    let users = await User.countDocuments({ deleteState: false })
    let userDetails = await UserDetails.countDocuments({ deleteState: false })
    let courses = await Courses.countDocuments({ deleteState: false })
    let defCourses = await DefCourses.countDocuments({ deleteState: false })
    res.status(200).json({ users, userDetails, courses, defCourses })
}