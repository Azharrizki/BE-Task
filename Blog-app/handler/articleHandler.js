const { ObjectId } = require("mongodb");

exports.addArticle = async (req, res, next) => {
	const { articleCollection } = req.app.locals;

	try {
		const result = await articleCollection.insertOne(req.body);
		console.log(result);

		res.status(200).json("Data successfully saved");
	} catch (error) {
		next(error);
	}
};

exports.getAllArticle = async (req, res, next) => {
	const { articleCollection } = req.app.locals;
	const sort = { title: 1 };
	const filter = { category: 1 };

	try {
		const result = await articleCollection
			.find(filter)
			.sort(sort)
			.limit(5)
			.toArray();

		res.status(200).json(result);
	} catch (error) {
		next(error);
	}
};

exports.updateArticle = async (req, res, next) => {
	const { articleCollection } = req.app.locals;

	try {
		// Melakukan update salah satu data pada article collection
		const result = await articleCollection.updateOne(
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

exports.deleteArticle = async (req, res, next) => {
	const { articleCollection } = req.app.locals;

	try {
		// Menghapus salah satu data pada collection article
		const result = await articleCollection.deleteOne({
			_id: ObjectId(req.params.id),
		});

		console.log(result);

		res.status(200).json("Data successfully deleted");
	} catch (error) {
		next(error);
	}
};

exports.getArticle = async (req, res, next) => {
	const { articleCollection } = req.app.locals;

	try {
		// Mengambil salah satu data
		const result = await articleCollection.findOne({
			_id: ObjectId(req.params.id),
		});

		res.status(200).json(result);
	} catch (error) {
		next(error);
	}
};
