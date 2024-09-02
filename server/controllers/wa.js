import waSend from '../lib/wa.js';
import Courses from '../models/Courses.js';
import UserDetails from '../models/UserDetails.js';

export default async function Wa(req, res) {
    try {
        let init = req.body
        // console.log(init);
        let course = await Courses.findOne({ _id: req.body.url })
        init.msg = init.msg
            .replace("{{title}}", ` *${course.title}* `)
            .replace("{{_id}}", `${course._id}`)
        let users = await UserDetails.find({ _id: { $in: init.list } }).select(" phone fullName");
        users.map(a => {

            waSend("961" + a.phone, init.msg.replace("{{name}}", `${a.fullName}`))

        })
        console.log(init);
        res.json({ data });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
