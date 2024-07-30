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
            const data = await this.models.find(query, '-password');
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
            const data = await this.models.findOne({ _id: req.params.id }, '-password')
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
            const data = await this.models.findByIdAndDelete(req.params.id);
            if (!data) return res.status(404).json({ message: 'data not found' });
            res.json({ message: 'models deleted' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    };
}