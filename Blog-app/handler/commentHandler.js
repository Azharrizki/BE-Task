const { ObjectId } = require("mongodb");

exports.addComment = async (req, res, next) => {
	const { commentCollection } = req.app.locals;

	try {
		const result = await commentCollection.insertOne(req.body);
		console.log(result);

		res.status(200).json("Data successfully saved");
	} catch (error) {
		next(error);
	}
};

exports.getAllComment = async (req, res, next) => {
	const { commentCollection } = req.app.locals;

	try {
		const result = await commentCollection.find().toArray();

		res.status(200).json(result);
	} catch (error) {
		next(error);
	}
};

exports.updateComment = async (req, res, next) => {
	const { commentCollection } = req.app.locals;

	try {
		// Melakukan update salah satu data pada article collection
		const result = await commentCollection.updateOne(
			{ _id: ObjectId(req.params.id) },
			{
				$set: {
					title: req.body.title,
					note: req.body.note,
				},
			},
		);
		console.log(result);

		res.status(200).json("Data successfully updated");
	} catch (error) {
		next(error);
	}
};

exports.deleteComment = async (req, res, next) => {
	const { commentCollection } = req.app.locals;

	try {
		// Menghapus salah satu data pada collection article
		const result = await commentCollection.deleteOne({
			_id: ObjectId(req.params.id),
		});

		console.log(result);

		res.status(200).json("Data successfully deleted");
	} catch (error) {
		next(error);
	}
};

exports.getArticle = async (req, res, next) => {
	const { commentCollection } = req.app.locals;

	try {
		// Mengambil salah satu data
		const result = await commentCollection.findOne({
			_id: ObjectId(req.params.id),
		});

		res.status(200).json(result);
	} catch (error) {
		next(error);
	}
};
