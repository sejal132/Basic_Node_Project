const dashboardController = (req, res) => {
	/**
	 * req.query contains the fields passed in the URL
	 * firstname: String
	 * lastname: String
	 * These same values are passed to the ejs file for dyanamic rendering
	 */
	const obj = req.query;
	res.render("dashboard", { obj: obj });
};

module.exports = { dashboardController };
