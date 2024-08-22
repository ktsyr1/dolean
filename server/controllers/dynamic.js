import mongoose from "mongoose";

export default class dynamicControllers {
    constructor(models) {
        this.models = models
        this.getAll = this.getAll.bind(this);
        this.create = this.create.bind(this);
        this.get = this.get.bind(this);
        this.update = this.update.bind(this);
        this.remove = this.remove.bind(this);
    }

    getAll = async (req, res) => {
        let { query } = req
        try {
            const data = await this.models.find({ ...query, deleteState: false }, '-password').sort({ _id: -1 })
            res.json(data);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
    create = async (req, res) => {
        try {
            const data = await this.models.create(req.body);
            res.status(201).json(data);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    };

    get = async (req, res) => {
        try {
            const data = await this.models.findOne({ _id: req.params.id }).select('-password')
            if (!data) return res.status(404).json({ message: 'data not found' });
            res.json(data);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    };

    update = async (req, res) => {
        try {
            const data = await this.models.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (!data) return res.status(404).json({ message: 'data not found' });
            res.json(data);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    remove = async (req, res) => {
        try {
            const data = await this.models.updateOne(
                { _id: new mongoose.Types.ObjectId(req.params.id) }, // Use 'new' with ObjectId
                { $set: { deleteState: true } }
            );
            if (!data) return res.status(404).json({ message: 'data not found' });
            res.json({ message: 'models deleted' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    };
}