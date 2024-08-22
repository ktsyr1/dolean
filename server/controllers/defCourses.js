import DefCourses from "../models/DefCourses.js"
import { Ai } from "../lib/Ai.js"



let extraPrompt = `
---
تحليل هذا النص
وتحوليه الى json بنفس هذه البنية التالية 

const CoursesSchema = new Schema({title: String,context: String,links: [String],keys: [String],location: String,age: {start: Number,end: Number},nationality: String,price: Number})
context syntax markdown
Reply all format json
`
export const defCoursesPreprocessing = async (req, res) => {
    let defCourses = await DefCourses.findOne({ _id: req.params.id })
    if (defCourses) {
        
        let { title, location, context } = defCourses
        
        let prompt = `
        ${title}
        ${location ? location : ""}
        ${context}
        ${extraPrompt}
        `
        let data = await Ai(prompt)
        res.status(200).json(data)
    }
    else res.status(400).json({msg:"not data"})
}